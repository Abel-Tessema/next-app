import {NextRequest, NextResponse} from "next/server";
import productSchema from "@/app/api/products/productSchema";
import prisma from "@/prisma/prismaClient";

interface Props {
  params: {id: string}
}

export async function GET(request: NextRequest, {params: {id}}: Props) {
  const product = prisma.product.findUnique({
    where: {id: parseInt(id)}
  });

  if (!product)
    return NextResponse.json({error: 'Product not found.'}, {status: 404});

  return NextResponse.json(product);
}

export async function PUT(request: NextRequest, {params: {id}}: Props) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  const product = await prisma.product.findUnique({
    where: {id: parseInt(id)}
  });

  if (!product)
    return NextResponse.json({error: 'Product not found.'}, {status: 404});

  const updatedProduct = await prisma.product.update({
    where: {id: parseInt(id)},
    data: {name: body.name, price: body.price}
  })

  return NextResponse.json(updatedProduct);
}

export async function DELETE(request: NextRequest, {params: {id}}: Props) {
  const product = await prisma.product.findUnique({
    where: {id: parseInt(id)}
  });

  if (!product)
    return NextResponse.json({error: 'Product not found.'}, {status: 404});

  const deletedProduct = await prisma.product.delete({
    where: {id: parseInt(id)}
  });

  return NextResponse.json(deletedProduct);
}