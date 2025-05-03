'use server';

export const getAllIdeas = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas`);

    if (!res.ok) {
      throw new Error('Failed to fetch ideas');
    }
    const data = await res.json();

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
