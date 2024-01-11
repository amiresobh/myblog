import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest){
    const body = await request.json()
    const newMessage = await prisma.message.create({
        data: {
            message: body.message
        }
    })

    return NextResponse.json(newMessage, {status: 201})
}