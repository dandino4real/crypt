"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function GoogleOAuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const accessToken = new URLSearchParams(window.location.search).get("access_token");
    if (accessToken) {
      localStorage.setItem("access_token", accessToken);
      router.push("/dashboard");
    } else {
      // Handle the error case where no access token is found
      console.error("No access token found in the URL");
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p>Processing your authentication...</p>
        {/* Optionally, add a spinner here */}
      </div>
    </div>
  );
}
