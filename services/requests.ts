import { handlingErrorCode } from "@/utils/handling-error-code";
import { Post } from "@/interface/Post";
import { SignupForm } from "@/schema/signup";
import axios, { AxiosResponse, AxiosError } from "axios";

type OmitCnpj = Omit<SignupForm, "cnpj">;
type OmitCpf = Omit<SignupForm, "cpf">;

export interface ServerResponse {
  email: string;
  password: string;
  cpf: string;
}

interface ErrorResponse {
  message: string;
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

export const createUserWithCpf = async (
  createUser: OmitCnpj
): Promise<ServerResponse> => {
  try {
    const response: AxiosResponse<ServerResponse> = await axios.post(
      "http://localhost:3000/cadastrarUsuarioCPF",
      createUser
    );
    console.log("RESPONSE DATA", response.data);
    return response.data;
  } catch (error) {
    const errors = error as AxiosError;
    if (errors.response && errors.response.data) {
      const errorMessage = (errors.response.data as ErrorResponse).message;
      console.log("MESSAGE", errorMessage);
      throw new Error(`${errorMessage}`);
    }
    console.error(errors);
    throw new Error("Falha ao cadastrar usuário co CPF");
  }
};

export const createUserWithCnpj = async (
  createUser: OmitCpf
): Promise<ServerResponse> => {
  try {
    const response: AxiosResponse<ServerResponse> = await axios.post(
      "http://localhost:3000/cadastrarUsuarioCNPJ",
      createUser
    );
    console.log("RESPONSE DATA CNPJ", response.data);
    return response.data;
  } catch (error) {
    const errors = error as AxiosError;
    if (errors.response && errors.response.data) {
      const errorMessage = (errors.response.data as ErrorResponse).message;
      console.log("MESSAGE", errorMessage);
      throw new Error(`${errorMessage}`);
    }
    console.error(errors);
    throw new Error("Falha ao cadastrar usuário com CNPJ");
  }
};
