import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import prisma from '@/app/libs/prismadb';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return NextResponse.json({
        error: 'User with this email already exists',
      });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword: hashedPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.error('An error occurred while registering the user: ', error);
    return NextResponse.json({ error: 'Server error' });
  }
}
