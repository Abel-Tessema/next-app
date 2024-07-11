import {NextRequest, NextResponse} from "next/server";

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
  if (!body.name)
    return NextResponse.json({error: 'Name is required.'}, {status: 400});

  return NextResponse.json({id: 1, name: body.name}, {status: 201});
}