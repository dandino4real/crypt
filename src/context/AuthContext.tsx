// "use client"

// // contexts/AuthContext.tsx
// import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { useRouter, usePathname } from 'next/navigation';

// interface User {
//   name: string;
// }

// interface AuthContextType {
//   user: User | null;
//   setUser: (user: User | null) => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const router = useRouter();
//   const pathname = usePathname()

//   useEffect(() => {
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       setUser({ name: 'John Doe' });
//       console.log('user AuthContext',1, user)
//       // router.push('/dashboard')
//     }else if(pathname === '/'){
//       router.push('/');
//     }
//     else if(pathname === '/signup'){
//       router.push('/signup');
//     }
//      else if (pathname !== '/signin') {
//       router.push('/signin');
//     }
//   }, [router]);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used within an AuthProvider');
//   }
//   return context;
// };
