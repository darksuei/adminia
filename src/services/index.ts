import Cookies from "js-cookie";
const token = Cookies.get("token");

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

export async function PostCredentials(data: UserData) {
  const serverResponse = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/user`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });
  return await serverResponse.json();
}

export async function DeleteAllData() {
  const serverResponse = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/delete_all_from_db`,
    {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return await serverResponse.json();
}

export async function CreateNewData(data: any) {
  const serverResponse = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER}/insert_to_db`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );
  return serverResponse.json();
}
