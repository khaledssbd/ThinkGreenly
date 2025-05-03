'use server'
import { getValidToken } from "@/lib/getValidToken";

export const getAllCategories = async () => {
  try {
    // const token = await getValidToken();
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/categories`,
    //   {
    //     headers: {
    //       Authorization: `${token}`,
    //     },
    //   }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch categories");
    }
    const data = await res.json();
    // console.log(data);
    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};

export const postIdea = async (formData: FormData): Promise<any> => {
    // console.log(formData)
    const token = await getValidToken();
            const res = await fetch(`http://localhost:5000/api/v1/ideas`, {
              method: "POST",
              headers: {
                Authorization: `${token}`,
              },
              body: formData,
            });
}