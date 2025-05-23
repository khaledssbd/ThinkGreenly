'use server';

import { getValidToken } from '@/lib/getValidToken';
export const metaService = async () => {
  const token = await getValidToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/meta`, {
    method: 'GET',
    headers: {
      Authorization: token,
    },
  });

  const result = res.json();
  return result;
};
