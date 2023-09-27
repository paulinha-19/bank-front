import { handlingErrorCode } from "@/utils/handling-error-code";

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 3600 },
    });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    handlingErrorCode(response);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("Falha ao buscar os dados");
  }
};
