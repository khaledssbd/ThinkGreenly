"use server";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { cookies } from "next/headers";

const getAuthToken = async () => {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken");
  return accessToken?.value;
};

export const getAllIdeas = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas`);

    if (!res.ok) {
      throw new Error("Failed to fetch rental houses");
    }
    const data = await res.json();
    console.log(data);
    // return data;
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};


export const updateIdea = async (id: string, payload: any) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      throw new Error("Failed to update idea");
    }

    const data = await res.json();
    return data.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const deleteIdea = async (id: string) => {
  try {
    const token = await getAuthToken();
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
