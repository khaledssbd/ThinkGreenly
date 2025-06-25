'use server';

import { getValidToken } from '@/lib/getValidToken';
import { revalidateTag } from 'next/cache';
import { FieldValues } from 'react-hook-form';

//* COMMON SERVICE ACTIONS STARTS FROM HERE

// createAnIdea
export const createAnIdea = async (content: FormData): Promise<any> => {
  const token = await getValidToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/ideas`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: content,
  });

  revalidateTag('IDEAS');

  const result = await res.json();
  return result;
};

// draftAnIdea
export const draftAnIdea = async (content: FormData): Promise<any> => {
  const token = await getValidToken();

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/ideas/draft`, {
    method: 'POST',
    headers: {
      Authorization: token,
    },
    body: content,
  });

  revalidateTag('IDEAS');

  const result = await res.json();
  return result;
};

// getAllIdeas
export const getAllIdeas = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
): Promise<any> => {
  const params = new URLSearchParams();

  if (query?.price) {
    params.append('minPrice', '0');
    params.append('maxPrice', query?.price.toString());
  }

  if (query?.searchTerm) {
    params.append('searchTerm', query?.searchTerm.toString());
  }

  if (query?.isPaid) {
    params.append('isPaid', query?.isPaid.toString());
  }
  if (query?.categoryId) {
    params.append('categoryId', query?.categoryId.toString());
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas?limit=${limit}&page=${page}&${params}`,
      {
        method: 'GET',
        next: {
          tags: ['IDEAS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// getIdeasByVotes
export const getIdeasByVotes = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/votes/ideas/by-votes`,
      {
        method: 'GET',
        next: {
          tags: ['IDEAS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// getSingleIdeaDetails
export const getSingleIdeaDetails = async (id: string): Promise<any> => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/ideas/${id}`, {
      method: 'GET',
      next: {
        tags: ['IDEAS'],
      },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// createVote
export const createVote = async (paymentData: FieldValues): Promise<any> => {
  const token = await getValidToken();

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/votes`, {
      method: 'POST',
      body: JSON.stringify(paymentData),
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    });

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// deleteVote
export const deleteVote = async (id: string): Promise<any> => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/votes/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: token,
        // 'Content-Type': 'application/json',
      },
      // body: JSON.stringify({ ideaId: id }),
    });

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

// createComment
export const createComment = async (payload: any): Promise<any> => {
  const token = await getValidToken();
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/comments`, {
      method: 'POST',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// deleteComment
export const deleteComment = async (id: string): Promise<any> => {
  const token = await getValidToken();
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/comments/${id}`,
      {
        method: 'DELETE',
        headers: {
          Authorization: token,
          // 'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ ideaId: id }),
      }
    );

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

//* ADMIN DASHBOARD PART SERVICE ACTIONS STARTS FROM HERE
// getAllIdeasByAdmin
export const getAllIdeasByAdmin = async (): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas?limit=100`,
      {
        method: 'GET',
        next: {
          tags: ['IDEAS'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// updateIdeaStatusByAdmin
export const updateIdeaStatusByAdmin = async (
  id: string,
  payload: { status: string; feedback?: string }
): Promise<any> => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/admin/ideas/${id}/status`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      }
    );

    revalidateTag('IDEAS');

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// deleteIdeaByAdmin
export const deleteIdeaByAdmin = async (id: string) => {
  try {
    const token = await getValidToken();

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/ideas/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

//* MEMBER DASHBOARD PART SERVICE ACTIONS STARTS FROM HERE

// getMemberOwnIdeas
export const getMemberOwnIdeas = async (): Promise<any> => {
  try {
    const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas/getOwnIdeas?limit=100`,
      {
        headers: {
          Authorization: token,
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};

// deleteIdeaByMember
export const deleteIdeaByMember = async (id: string): Promise<any> => {
  try {
    const token = await getValidToken();

    if (!token)
      return { success: false, message: 'Authentication token not found' };

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/ideas/${id}`, {
      method: 'DELETE',
      headers: { Authorization: token },
    });

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error);
  }
};
