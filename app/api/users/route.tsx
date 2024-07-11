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

  return NextResponse.json({id: 1, name: body.name}, {status: 201});
}