import Nav from "../components/Nav";
import Main from "../components/Main";
import SetUpForm from "../components/SetupForm";

export default function SetUp() {
  return (
    <main>
      <Nav />
      <Main title="Set up your Organization">
        <SetUpForm />
      </Main>
    </main>
  );
}
