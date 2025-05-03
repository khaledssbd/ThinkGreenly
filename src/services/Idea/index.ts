/* eslint-disable @typescript-eslint/no-explicit-any */
// get all Ideas
export const getAllIdeas = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
): Promise<any> => {
  const params = new URLSearchParams();

  if (query?.maxRent) {
    params.append('minRent', '0');
    params.append('maxRent', query?.maxRent.toString());
  }

  if (query?.searchTerm) {
    params.append('searchTerm', query?.searchTerm.toString());
  }

  if (query?.isRented) {
    params.append('isRented', query?.isRented.toString());
  }
// console.log(`?limit=${limit}&page=${page}&${params}`);
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas`,
      {
        next: {
          tags: ['IDEA'],
        },
      }
    );

    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};
