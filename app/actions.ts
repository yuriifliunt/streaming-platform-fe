'use server'
 
import { cookies } from 'next/headers'
 
export async function create(theme: string) {
  const cookieStore = await cookies();
  cookieStore.set({
    name: 'theme',
    value: theme,
    httpOnly: true,
    path: '/',
  })
}