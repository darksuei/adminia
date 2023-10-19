import Main from "../../components/Main";
import Credentials from "@/app/components/Credentials";

export default function SetUp() {
  return (
    <main>
      <Main title="Enter your Database Credentials">
        <Credentials />
      </Main>
    </main>
  );
}
