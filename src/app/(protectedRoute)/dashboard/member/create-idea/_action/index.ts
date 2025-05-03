'use server';

import { getValidToken } from '@/lib/getValidToken';

export const getAllCategories = async () => {
  try {
    // const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/categories`
      //   {
      //     headers: {
      //       Authorization: `${token}`,
      //     },
      //   }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }

    const data = await res.json();
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

// createAnIdea
export const createAnIdea = async (formData: FormData): Promise<any> => {
  const token = await getValidToken();
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/ideas`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: formData,
  });

  const data = await res.json();
  return data;
};
