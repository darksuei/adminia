import Main from "../components/Main";
import SetUpForm from "../components/SetupForm";

export default function SetUp() {
  return (
    <main className="mt-10 md:mt-0">
      <Main title="Set up your Organization">
        <SetUpForm />
      </Main>
    </main>
  );
}
