'use server';

import { getValidToken } from '@/lib/getValidToken';
import { revalidateTag } from 'next/cache';
import { FieldValues } from 'react-hook-form';

// getAllCategories
export const getAllCategories = async (): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`, {
      next: {
        tags: ['CATEGORIES'],
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// createCategories
export const createCategories = async (
  categoryData: FieldValues
): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/categories`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoryData),
    });

    revalidateTag('CATEGORIES');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// deleteCategories
export const deleteCategories = async (id: string): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/categories/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
        },
      }
    );

    revalidateTag('CATEGORIES');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
