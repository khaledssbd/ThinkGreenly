import { getValidToken } from "@/lib/getValidToken";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllIdeas = async () => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas/getOwnIdeas`,
      {
        headers: {
          Authorization: `${token}`,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch ideas");
    }
    const data = await res.json();
    console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};