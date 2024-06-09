import { NextResponse } from 'next/server';
import { verifyJWT } from './utils/jwt';

export async function middleware(request:any) {
  const authHeader = request.headers.get('authorization');

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  const token = authHeader.split(' ')[1];

  try {
    await verifyJWT(token);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  matcher: ['/protected/:path*'], // Protect all routes under /protected
};