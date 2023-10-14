type Props = {
  title: string;
  children: React.ReactNode;
};
export default function Main({ title, children }: Props) {
  return (
    <main className="w-10/12 bg-white rounded-3xl h-fit mx-auto text-black p-8">
      <h1 className="text-xl font-semibold mb-4">{title}</h1>
      <div>{children}</div>
    </main>
  );
}
