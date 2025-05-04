/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllIdeas = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas`);

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