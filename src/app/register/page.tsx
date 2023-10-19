import Auth from "../components/Auth";

export default function Register() {
  return (
    <main className="h-screen">
      <Auth isSignUp={true} title="Register" />
    </main>
  );
}
