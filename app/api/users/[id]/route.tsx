import {NextRequest, NextResponse} from "next/server";
import userSchema from "@/app/api/users/userSchema";
import prisma from "@/prisma/prismaClient";

interface Props {
  params: {id: string}
}

export async function GET(request: NextRequest, {params: {id}}: Props) {
  const user = await prisma.user.findUnique({
    where: {id: parseInt(id)}
  });

  if (!user)
    return NextResponse.json({error: 'User not found.'}, {status: 404})

  return NextResponse.json(user)
}

export async function PUT(request: NextRequest, {params: {id}}: Props) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  const user = await prisma.user.findUnique({
    where: {id: parseInt(id)}
  });

  if (!user)
    return NextResponse.json({error: 'User not found.'}, {status: 404});

  const updatedUser = await prisma.user.update({
    data: {name: body.name, email: body.email},
    where: {id: parseInt(id)}
  })

  return NextResponse.json(updatedUser);
}

export async function DELETE(request: NextRequest, {params: {id}}: Props) {
  const user = await prisma.user.findUnique({
    where: {id: parseInt(id)}
  });

  if (!user)
    return NextResponse.json({error: 'User not found.'}, {status: 404});

  const deletedUser = await prisma.user.delete({
    where: {id: parseInt(id)}
  });

  return NextResponse.json(deletedUser);
}