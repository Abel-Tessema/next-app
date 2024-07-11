import {NextRequest, NextResponse} from "next/server";
import schema from "@/app/api/users/schema";

/*
* The 'request' parameter is not being used here, and you may think to remove it.
* But if you do, Next will cache the data. To prevent that, you'll need to have
* the parameter even if you won't use it.
* */
export function GET(request: NextRequest) {
  return NextResponse.json([
    {id: 1, name: 'Bela Jash'},
    {id: 2, name: 'Miwba'}
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = schema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.errors, {status: 400});

  return NextResponse.json({id: 1, name: body.name}, {status: 201});
}