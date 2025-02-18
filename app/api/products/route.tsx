import {NextRequest, NextResponse} from "next/server";
import productSchema from "@/app/api/products/productSchema";
import prisma from "@/prisma/prismaClient";

export async function GET(request: NextRequest) {
  const products = await prisma.product.findMany();

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  const newProduct = await prisma.product.create({
    data: {name: body.name, price: body.price}
  });

  return NextResponse.json(newProduct, {status: 201});
}