interface AuthData {
  name?: string;
  email?: string;
  password: string;
}

interface UserContextType {
  user?: any;
  setUser?: React.Dispatch<React.SetStateAction<any>>;
}
