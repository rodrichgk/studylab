"use client";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Link, Button } from "@nextui-org/react";

export default function SignButton() {
  const router = useRouter();
  const { data: session } = useSession();

  const RedirectToSignInPage = () => {
    router.push("/signin");
  };

  if (session) {
    return (
      <Button
        onClick={() => signOut({ callbackUrl: "/" })}
        color="secondary"
        variant="flat"
      >
        Sign Out
      </Button>
    );
  }
  return (
    <Button as={Link} color="primary" href="/signin" variant="flat">
      Sign In
    </Button>
  );
}
