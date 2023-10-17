import Nav from "./components/Nav";

export default function Home() {
  return (
    <div className="h-screen w-full">
      <Nav isNotLoggedIn={true} />
      <div className="h-4/6 w-full flex items-center justify-center">
        <h1 className="text-3xl font-black">Welcome to Adminia!</h1>
      </div>
    </div>
  );
}
