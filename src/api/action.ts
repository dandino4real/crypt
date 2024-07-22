"use server"

import axios from "@/api/axiosInstance";

interface LoginResponse {
  token: string;
}

interface GoogleSignInResponse {
  url: string;
}

export const login = async (email: string): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>("api/v1/auth/login", {
    email,
  });
  return response.data;
};

export const getGoogleSignInUrl = async (): Promise<GoogleSignInResponse> => {
  const response = await axios.get<GoogleSignInResponse>("api/v1/auth/google");
  return response.data;
};


    export const fetchWalletData = async (authToken: string | null) => {
      if (!authToken) {
        throw new Error("Auth token is required");
      }
    
      const response = await axios.get("/api/v1/wallets", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
    
      return response.data;
    };



    export const fetchWalletHistory = async (authToken: string | null, currentPage: number, itemsPerPage: number) => {
      if (!authToken) {
        throw new Error("Auth token is required");
      }
    
      const response = await axios.get(
        `/api/v1/wallets/history?page=${currentPage}&limit=${itemsPerPage}`,
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
    
      return response.data;
    };

