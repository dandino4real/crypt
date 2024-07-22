 export interface Transaction {
    id: string;
    assetType: string;
    walletName: string;
    sender: string;
    receiver: string;
    transHash: string;
    amount: string;
    amountNGN: string;
    status: string;
    date: string;
  }



export interface Asset {
    balance: number;
    currency: string;
    id: string;
  }
  
  export interface WalletData {
    assets: Asset[];
  }
  