import {NextRequest, NextResponse} from "next/server";
import productSchema from "@/app/api/products/productSchema";

interface Props {
  params: {id: number}
}

export async function PUT(request: NextRequest, {params: {id}}: Props) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  if (id > 10) // Simulating a product not found error.
    return NextResponse.json({error: 'Product not found.'}, {status: 404});

  return NextResponse.json({id: id, name: body.name, price: body.price});
}

export function DELETE(request: NextRequest, {params: {id}}: Props) {
  if (id > 10) // Simulating a product not found error.
    return NextResponse.json({error: 'Product not found.'}, {status: 404});

  return NextResponse.json({});
}