'use server';

import { getValidToken } from '@/lib/getValidToken';

export const getMemberOwnIdeas = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas/getOwnIdeas?limit=100`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch ideas');
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteIdea = async (id: string) => {
  try {
    const token = await getValidToken();
    
    if (!token) return { success: false, message: "Authentication token not found" };

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas/${id}`,
      {
        method: "DELETE",
        headers: { Authorization: token },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to delete idea");
    }

    const data = await res.json();
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
