
'use server';

import { revalidateTag } from "next/cache";

export const getAllUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/users`,{
      method: 'GET',
      // headers: {
      //   Authorization: token,
      // },
      next: {
        tags: ['USERS'],
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch ideas");
    }
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateUserStatus = async (id: string, isActive: boolean) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/user/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isActive }),
    },);

    if (!res.ok) {
 throw new Error("Failed to update user status");
    }
    revalidateTag('USERS');
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
