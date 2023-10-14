export default function Nav() {
  return (
    <nav className="w-full h-20 flex flex-row justify-around items-center gap-10">
      <h1 className="text-xl font-bold cursor-pointer">Adminia</h1>
      <ul className="flex flex-row gap-10">
        <li className="cursor-pointer text-sm">Account</li>
        <li className="cursor-pointer text-sm">Home</li>
        <li className="cursor-pointer text-sm">Settings</li>
      </ul>
    </nav>
  );
}
