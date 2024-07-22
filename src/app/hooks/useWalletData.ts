import axios from "@/api/axiosInstance";
import { useMutation, useQuery } from "@tanstack/react-query";


type QueryKey = [string, string, string];

interface WithdrawData {
    currency: string;
    amount: number;
    network: string;
    recipient: string;
  }
  

// functions

const postWithdrawData = async (withdrawData: WithdrawData) => {
    const authToken = localStorage.getItem("access_token");
    const response = await axios.post(
      "/api/v1/wallets/withdraw-asset",
      withdrawData,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  };

const getCoinData = async () => {
  const response = await axios.get("/api/v1/configs/assets-config");
  return response.data;
};
const getUserWalletBalance = async () => {
  const authToken = localStorage.getItem("access_token");
  const response = await axios.get(
    "/api/v1/wallets",

    {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
  );
  return response.data;
};

const getCoinPrices = async () => {
  const response = await axios.get("/api/v1/configs/coin-prices");
  return response.data;
};

const getUserWalletAddress = async ({ queryKey }: { queryKey: QueryKey }) => {
    const [_, symbol, networkType] = queryKey;
    const authToken = localStorage.getItem("access_token");
    const response = await axios.get(
      `/api/v1/wallets/assets/${symbol}/addresses/${networkType}`,
      {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    return response.data;
  };

  const calculateTotalBalance = async () => {
    try {
      const exchangeRates = await getCoinPrices();
   
      const walletData = await getUserWalletBalance();
   
  
      let USD = 0;
      let NGN = 0;
  
      walletData?.assets.forEach((asset: { currency: string; availableBalance: number; }) => {
        const { currency, availableBalance } = asset;
        const rate = exchangeRates[currency];
        if (rate) {
          USD += availableBalance * rate.usd;
          NGN += availableBalance * rate.ngn;
        }
      });
  
      return {
        USD,
        NGN
      };
    } catch (error) {
      console.error("Error calculating total balance:", error);
      throw error;
    }
  };
  


// query
export const useGetWalletData = () => {
  return useQuery({
    queryKey: ["wallet"],
    queryFn: getUserWalletBalance,
    refetchInterval : 10000,
    refetchIntervalInBackground: true
    // enabled: !!coinData,
  });
};

export const useGetCoinData = () => {
  return useQuery({
    queryKey: ["coin-data"],
    queryFn: getCoinData,
    refetchInterval : 10000,
    refetchIntervalInBackground: true
  });
};

export const useGetCoinPrices = () => {
  return useQuery({
    queryKey: ["coin-price"],
    queryFn: getCoinPrices,
    refetchInterval : 10000,
    refetchIntervalInBackground: true
    // enabled: !!coinData,
  });
};


export const useGetWalletAddress = (symbol: string, networkType: string) => {
    return  useQuery({
        queryKey: ["network-address", symbol, networkType] as QueryKey,
        queryFn: getUserWalletAddress,
        
        
       
        
      });
}


export const useGetAssetTotalBalance = () => {
    return useQuery({
        queryKey: ["total-balance"],
        queryFn: calculateTotalBalance,
        refetchInterval : 10000,
        refetchIntervalInBackground: true
        
      });
}



export const useAddWithdrawalDetails = (onSuccess: (data: any) => void) => {
    return  useMutation({
        mutationFn: postWithdrawData,onSuccess: (data, variables, context) => {
          onSuccess(data);
        },
      });
    
}

