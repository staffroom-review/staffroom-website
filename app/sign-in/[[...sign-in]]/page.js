import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: "32px", background: "#101416" }}>
      <SignIn fallbackRedirectUrl="/analytics" />
    </main>
  );
}
