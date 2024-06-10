import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/dbClient"
import productSchema from "./schema";

export async function GET(request: NextRequest) {
    const products = await prisma.product.findMany()
    return NextResponse.json(products, {status: 200})
}

export async function POST(request: NextRequest) {
    const body = await request.json()
    const validation = productSchema.safeParse(body)
    if(!validation.success)
        return NextResponse.json(validation.error.errors, {status:400})
    const product = await prisma.product.findUnique({
        where: {
          name: body.name
        }
    })
    if(product) {
        return NextResponse.json({error: "Product Already Exists"}, {status:400})
    }
    const newProduct = await prisma.product.create({
        data: {
            name: body.name,
            price: body.price
        }
    })
    return NextResponse.json(newProduct, {status: 201})
}