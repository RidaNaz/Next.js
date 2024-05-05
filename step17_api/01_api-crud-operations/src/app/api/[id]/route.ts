import { NextRequest, NextResponse } from "next/server";

interface Id {
    slug : string
}

export default function GET (request: NextRequest, {params}: {params: Id}) {
    
    // dbconnection
    // const result = await db.findOne(params.slug)

    return new NextResponse(`Dynamic Api Route ${params.slug}`)
}