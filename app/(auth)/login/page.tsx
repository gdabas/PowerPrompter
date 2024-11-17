// app/auth/page.js
"use client";
// app/auth/page.js
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { loginWithGoogle } from "../../api/firebaseAuth";
import Link from "next/link";
import Image from "next/image";
import styles from "./login.module.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LoginPage() {
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);

  const handleGoogleLogin = async (): Promise<void> => {
    try {
      const user = await loginWithGoogle();
      // Redirect to dashboard
      router.push("/dashboard");
    } catch (error: any) {
      console.error("Login failed:", error.message);
      toast.error("Login failed. Please try again.");
    }
  };

  return (
    <div className={styles.loginSection}>
      <div className="container h-screen flex justify-center items-center m-auto">
        <div className="w-full max-w-md">
          <div className={styles.login_wrapper}>
            <div className={styles.logo_wrapper}>
              <Link className="text-4xl block mb-4" href="/">
                DEMO
              </Link>
            </div>

            <p className="mb-4">Welcome to DEMO</p>
            <button
              className={`${styles.loginBtn} flex items-center justify-center`}
              onClick={handleGoogleLogin}
            >
              <Image
                src="/google.png"
                alt="Google Logo"
                width={25}
                height={25}
              />{" "}
              Login with Google
            </button>
            <Link href={"/"} className={styles.backtoHome}>
              {" "}
              <KeyboardBackspaceIcon /> Back to Home
            </Link>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
