// app/profile/page.tsx
"use client";
import React, { useEffect, useState } from "react";
import useStore from "../../store/userStore";
import { User } from "../../types/user";
import { ProfileCard } from "../components/ProfileCard";

export default function ProfilePage() {
  const [loading, setLoading] = useState<boolean>(true);
  const user = useStore((state) => state.user as User | null);

  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1 className="text-4xl font-bold">This is Profile</h1>
      {user && <ProfileCard user={user} />}
    </div>
  );
}
