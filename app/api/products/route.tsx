import {NextRequest, NextResponse} from "next/server";
import productSchema from "@/app/api/products/productSchema";

export function GET(request: NextRequest) {
  const products = [
    {id: 1, name: 'Milk', price: 2.5},
    {id: 2, name: 'Bread', price: 3.5}
  ];

  return NextResponse.json(products);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  return NextResponse.json({id: 3, name: body.name, price: body.price}, {status: 201});
}