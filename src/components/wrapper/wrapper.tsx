import React, { ReactNode } from 'react';

interface WrapperProps {
    children: ReactNode;
}

export default function Wrapper({ children }: WrapperProps) {
    return (
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {children}
        </div>
    );
}
