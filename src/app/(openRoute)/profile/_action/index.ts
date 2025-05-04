'use server';

import { getValidToken } from '@/lib/getValidToken';
import { cookies } from 'next/headers';

export const updatePassword = async (payload: {
  newPassword: string;
  oldPassword: string;
}) => {
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

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateProfile = async (formData: FormData) => {
  try {
    const token = await getValidToken();

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/users/profile`,
      {
        method: 'PATCH',
        headers: {
          Authorization: token,
        },
        body: formData,
      }
    );

    const result = await res.json();

    if (result.success) {
      (await cookies()).set('accessToken', result.data.accessToken);
      (await cookies()).set('refreshToken', result?.data?.refreshToken);
    }

    return result;
  } catch (error: any) {
    console.error(error);
  }
};
