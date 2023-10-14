import Nav from "../../components/Nav";
import Main from "../../components/Main";
import Credentials from "@/app/components/Credentials";

export default function SetUp() {
  return (
    <main>
      <Nav />
      <Main title="Enter your Database Credentials">
        <Credentials />
      </Main>
    </main>
  );
}
