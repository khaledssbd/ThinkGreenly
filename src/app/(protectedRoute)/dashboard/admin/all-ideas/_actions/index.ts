'use server';
import { revalidateTag } from "next/cache";

/* eslint-disable @typescript-eslint/no-explicit-any */
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
      throw new Error("Failed to fetch ideas");
    }
    const data = await res.json();
    console.log(data,"all data only:");
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
  console.log(res, "res from update idea status")
    if (!res.ok) {
      throw new Error("Failed to update idea ");
    }
    revalidateTag('IDE');
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};