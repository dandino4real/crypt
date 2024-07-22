// "use client"

// // components/ProtectedRoute.tsx
// import React, { useEffect, ReactNode } from 'react';
// import { useAuth } from  '../../context/AuthContext'
// import { useRouter } from 'next/navigation';

// const ProtectedRoute = ({ children }: { children: ReactNode }) => {
//   const { user } = useAuth();
//   const router = useRouter();

//   useEffect(() => {
//     const token = localStorage.getItem('access_token');

//     console.log('user useEffect',user?.name)
//     console.log('Token from localStorage:', token);

//     if (!user?.name) {
//       router.push('/signin');
//     }
//   }, [user, router]);

//   if (!user?.name) {
//     return null; // or a loading spinner
//   }

//   return <>{children}</>;
// };

// export default ProtectedRoute
