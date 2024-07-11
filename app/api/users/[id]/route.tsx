import {NextRequest, NextResponse} from "next/server";

interface Props {
  params: {id: number}
}

export function GET(request: NextRequest, {params: {id}}: Props) {
  /*
  * Fetch the data from the database.
  * If it's not found, return 404.
  * Else, return the data.
  * */
  if (id > 10) // Simulating a user not found error.
    return NextResponse.json({error: 'User not found.'}, {status: 404})

  return NextResponse.json({id: 1, name: 'Bela Jash'})
}

export async function PUT(request: NextRequest, {params: {id}}: Props) {
  /*
   * Validate the request body.
   * If it's invalid, return 400 (bad request).
   * Else, fetch the user with the given ID.
     * If it doesn't exist, return 404.
     * Else, update the user and return it.
   */
  const body = await request.json();
  if (!body.name)
    return NextResponse.json({error: 'Name is required.'}, {status: 400});

  if (id > 10) // Simulating a user not found error.
    return NextResponse.json({error: 'User not found.'}, {status: 404});

  return NextResponse.json({id: id, name: body.name}, {status: 200});
}

export async function DELETE(request: NextRequest, {params: {id}}: Props) {
  /*
  * Fetch the user from the database.
  * If it's not found, return 404.
  * Else, delete the user, and return 200.
  * */
  if (id > 10) // Simulating a user not found error.
    return NextResponse.json({error: 'User not found.'}, {status: 404});

  return NextResponse.json({});
}