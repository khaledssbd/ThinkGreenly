'use server';

import { revalidateTag } from "next/cache";
export const getAllIdeas = async () => {
  try {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas`,{
      method: 'GET',
      // headers: {
      //   Authorization: token,
      // },
      next: {
        tags: ['IDEAS'],
      }});

    if (!res.ok) {
      throw new Error('Failed to fetch ideas');
    }
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


export const updateIdeaStatus = async (id: string, payload: {status: string, feedback?: string}) => {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas/${id}/status`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },);
    
    if (!res.ok) {
      throw new Error("Failed to update idea ");
    }
    revalidateTag('IDEAS');
    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
