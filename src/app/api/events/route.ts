import { NextRequest, NextResponse } from "next/server";
import eventSchema from "./schema";
import prisma from "@/prisma/dbClient";

export async function GET(request: NextRequest) {
  const events = await prisma.event.findMany();
  return NextResponse.json(events);
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = eventSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})
    const event = await prisma.event.create({
        data: {
          name: body.name,
          content: body.content
        }
    })
    return NextResponse.json(event, {status: 201})
}