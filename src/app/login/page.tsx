import Auth from "../components/Auth";

export default function Login() {
  return (
    <main className="h-screen">
      <Auth isSignUp={false} title="Login" />
    </main>
  );
}
