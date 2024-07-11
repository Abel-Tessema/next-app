import {NextRequest, NextResponse} from "next/server";
import userSchema from "@/app/api/users/userSchema";
import prisma from "@/prisma/prismaClient";

/*
* The 'request' parameter is not being used here, and you may think to remove it.
* But if you do, Next will cache the data. To prevent that, you'll need to have
* the parameter even if you won't use it.
* */
export async function GET(request: NextRequest) {
  const users = await prisma.user.findMany();

  return NextResponse.json(users);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  const user = await prisma.user.findUnique({
    where: {email: body.email}
  });

  if (user)
    return NextResponse.json({error: 'User already exists.'}, {status: 400});

  const newUser = await prisma.user.create({
    data: {name: body.name, email: body.email}
  });

  return NextResponse.json(newUser, {status: 201});
}