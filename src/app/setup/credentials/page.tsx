import Main from "../../components/Main";
import Credentials from "@/app/components/Credentials";

export default function SetUp() {
  return (
    <main className="mt-10">
      <Main title="Enter your Database Credentials">
        <Credentials />
      </Main>
    </main>
  );
}
