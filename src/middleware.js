import { NextResponse } from "next/server";
export const middleware = async (req, res) => {
    const token = req.cookies.get("token")?.value
    if (!token) {
        if (req.nextUrl.pathname === "/") return NextResponse.redirect(new URL("/login", req.url))
    }
}