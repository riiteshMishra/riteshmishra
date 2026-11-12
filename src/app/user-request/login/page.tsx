import { Suspense } from "react";
import LoginForm from "@/components/core/auth/LoginForm";

export const metadata = {
  title: "Login",
  robots: { index: false, follow: false },
};

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}