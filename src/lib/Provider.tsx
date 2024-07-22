"use client"

import { ReactNode } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { useState } from "react";

export default function Provider({ children }: { children: ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}





// "use client";

// import React, { ReactNode, useState } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
// import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// // import { AuthProvider }  from '@/context/AuthContext'

// export default function Provider({ children }: { children: ReactNode }) {
//   const [queryClient] = useState(() => new QueryClient());
//   return (
//     <QueryClientProvider client={queryClient}>
//       {/* <AuthProvider> */}
//         {/* <ReactQueryDevtools initialIsOpen={false} /> */}
//         {children}
//       {/* </AuthProvider> */}
//     </QueryClientProvider>
//   );
// }
