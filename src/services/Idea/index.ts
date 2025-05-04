// get all Ideas
export const getAllIdeas = async (
  page?: string,
  limit?: string,
  query?: { [key: string]: string | string[] | undefined }
): Promise<any> => {
  const params = new URLSearchParams();


  if (query?.price) {
    params.append("minPrice", "0");
    params.append("maxPrice", query?.price.toString());
  }

  if (query?.searchTerm) {
    params.append("searchTerm", query?.searchTerm.toString());
  }

  if (query?.isPaid) {
    params.append("isPaid", query?.isPaid.toString());
  }
  if (query?.categoryId) {
    params.append("categoryId", query?.categoryId.toString());
  }
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas?limit=${limit}&page=${page}&${params}`,
      {
        next: {
          tags: ["IDEA"],
        },
  }


    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};

export const getByVotes = async () => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/votes/ideas/by-votes`,
      {
        method: "GET",
      }
    );
    const result = await res.json();
    return result;
  } catch (error: any) {
    return Error(error.message);
  }
};



export const getSingleIdeaDetails = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/ideas/${id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        next: {
          tags: ["IDEA"],
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (error: any) {
    return Error(error);
  }
};
