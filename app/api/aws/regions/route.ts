import path from 'path'
import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs/promises'

export async function POST(req: NextRequest) {
  try {
    const data = await fs.readFile(path.resolve('./public/aws/regions.json'), 'utf-8')
    return NextResponse.json({ success: true, data: JSON.parse(data) })
  } catch (e) {
    return NextResponse.json({ success: false, error: e }, { status: 500 })
  }
}
