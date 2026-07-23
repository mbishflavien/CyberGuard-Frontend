import { NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET() {
  const fileId = '1CpXwo_txPWGd7_buaxOLnRv9AH15Jj2Z';
  const url = `https://lh3.googleusercontent.com/d/${fileId}`;
  
  return NextResponse.redirect(url, 307);
}
