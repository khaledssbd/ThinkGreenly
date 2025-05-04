'use server';

import { getValidToken } from "@/lib/getValidToken";


export const updatePassword = async (
  payload: { newPassword: string; oldPassword: string }
) => {
  try {
     const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/auth/changed-password`,
      {
        method: 'PATCH',
        headers: {
            Authorization: token,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      throw new Error('Failed to update password ');
    }

    const data = await res.json();
    console.log('data', data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};