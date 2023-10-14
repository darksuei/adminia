export default function SetUp() {
  return (
    <main>
      <h1 className="bg-red-300 text-4xl">SetUp</h1>
      <form>
        <label>Database Connection String or Url</label>
        <input type="text" placeholder="Enter database connection string" />
      </form>
    </main>
  );
}
