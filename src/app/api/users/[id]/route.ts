import { NextRequest, NextResponse } from "next/server";
import userSchema from "../schema";
import prisma from "@/prisma/dbClient";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const id = parseInt(params.id);

  try {
    const selectedUser = await prisma.user.findUnique({
      where: { id },
    })
    if(!selectedUser) 
      return NextResponse.json({ error: "User Not Found" }, { status: 404 });

    return NextResponse.json(selectedUser);
  } catch (error) {
    console.log('user find error : ', error)    
  }

}

export async function PUT(
  request: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if(!validation.success)
    return NextResponse.json(validation.error.errors, {status:400})
  const selectedUser = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  })
  if (!selectedUser)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });
  const user = await prisma.user.findUnique({
    where: {
      email: body.email
    }
  })
  if(user) {
    return NextResponse.json({error: "User Already Exists"}, {status:400})
  }
  const updatedUser = await prisma.user.update({
    where: { id: parseInt(id) },
    data: {
      name: body.name,
      email: body.email,
    },
  })
  return NextResponse.json(updatedUser, { status: 201 });
}

export async function DELETE(
  request: NextRequest,
  {
    params: { id },
  }: { params: { id: string } }
) {
  const selectedUser = await prisma.user.findUnique({
    where: { id: parseInt(id) },
  })
  if (!selectedUser)
    return NextResponse.json({ error: "User Not Found" }, { status: 404 });

  await prisma.user.delete({
    where: { id: parseInt(id) },
  })
  return NextResponse.json({ message: "User deleted", selectedUser});
}