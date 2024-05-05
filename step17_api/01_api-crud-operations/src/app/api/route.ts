import { NextRequest, NextResponse } from 'next/server'   // Necessary step for performing CRUD



//  1. Create (Post method)
export async function POST(request: NextRequest) {
    const { name, age, _id } = await request.json()

    // data connect await db.create({ name, age, _id })

    return new NextResponse(`User ${name} created!`)
}



// 2. Read (get method)
export function GET(request: NextRequest) {
    const url = request.nextUrl
    const name = url.searchParams.get("name")
    const age = url.searchParams.get("age")
    const query = url.searchParams.has("name")

    if (query) {
        return new NextResponse("Hi! This is Rida")
    }

    if (age == "22") {
        return new NextResponse(`Hello ${name}`)
    }

    return NextResponse.json({ url, name, age, query })
}



//  3. Update (Put method)
export async function PUT(request: NextRequest) {
    const { name, age, _id } = await request.json()

    // data connect await db.updateOne({ name, age, _id })

    return new NextResponse(`User ${name} updated!`)
}



//  4. Delete (delete method)
export async function DELETE(request: NextRequest) {
    const { _id } = await request.json()

    // data connect await db.deleteOne({ _id })

    return new NextResponse(`User deleted!`)
}