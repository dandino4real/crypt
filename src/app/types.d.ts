
interface Network {
    symbol: string;
    networkSymbol: string;
    name: string;
    currency?: string;
    addressBase: string;
    logoUrl: string;
    networkConfig: {
      withdrawalFee: number;
      depositFee: number;
      minimumWithdrawal: number;
    };
  }
  interface TransformedNetwork {
    symbol: string;
    networks: {
      symbol: string;
      networkSymbol: string;
    }[];
  }

  
  interface WalletCardProps {
    showAction: boolean;
    showCoin: boolean;
  }
  
  interface WithdrawData {
    currency: string;
    amount: number;
    network: string;
    recipient: string;
  }


export interface Coin {
    symbol: string;
    name: string;
    hasWallet: boolean;
    networks: Network[];
    logoUrl: string;
    isToken: boolean;
    displayDecimals: number;
    roundingDecimals?: number;
    assetRank: number;
    minimumTradeQuantity: number;
  }