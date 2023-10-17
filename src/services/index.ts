export async function Login(data: AuthData) {
  const serverResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return serverResponse.json();
}

export async function Register(data: AuthData) {
  console.log(process.env.NEXT_PUBLIC_SERVER, "hi");
  const serverResponse = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/new_user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return serverResponse.json();
}
