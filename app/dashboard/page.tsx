// app/dashboard/page.tsx
"use client";

import React, { useEffect, useState } from "react";
import useStore from "../store/userStore";
interface User {
  displayName: string;
  // Add other user properties if needed
}

export default function DashboardPage() {
  const [loading, setLoading] = useState<boolean>(true);
  const user = useStore((state) => state.user as User | null);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user, useStore]); // Add useStore to the dependency array

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold mb-5">This is dashboard</h1>
      {user && <p>Welcome, {user.displayName}!</p>}
    </div>
  );
}
