import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Validate request body
    if (!username || !password) {
      return NextResponse.json(
        { success: false, error: 'Missing credentials' },
        { status: 400 }
      );
    }

    // Validate environment variables
    if (!process.env.ADMIN_USERNAME || !process.env.ADMIN_PASSWORD) {
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    // Validate credentials
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
      return NextResponse.json({ 
        success: true,
        message: 'Authentication successful'
      });
    }

    return NextResponse.json(
      { success: false, error: 'Invalid username or password' },
      { status: 401 }
    );
  } catch (error) {
    console.error('Login API error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}