'use server';

import { revalidateTag } from 'next/cache';

import { getValidToken } from '@/lib/getValidToken';

export const getAllIdeasByAdmin = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas`, {
      method: 'GET',
      // headers: {
      //   Authorization: token,
      // },
      next: {
        tags: ['IDEAS'],
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch ideas');
    }
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const updateIdeaStatus = async (
  id: string,
  payload: { status: string; feedback?: string }
) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas/${id}/status`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      throw new Error('Failed to update idea ');
    }
    revalidateTag('IDEAS');
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteIdea = async (id: string) => {
  try {
    const token = await getValidToken();
    console.log('token:',token);
    if (!token) return { success: false, message: "Authentication token not found" };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );
    console.log('f-idaS:',res);
    if (!res.ok) {
      throw new Error("Failed to delete idea");
    }

    const data = await res.json();
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
