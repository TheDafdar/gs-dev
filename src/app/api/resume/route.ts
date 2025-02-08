import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

// This route just in case if need API resume instead of SSR

export async function GET() {
  const resume = await prisma.resume.findFirst({
    include: {
        experiences: {
            include: {
                company: true,
            }
        },
        skills: true,
    }
  });
  return NextResponse.json(resume);
}
