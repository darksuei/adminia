interface AuthData {
  name?: string;
  email?: string;
  password: string;
}

interface UserContextType {
  user?: any;
  setUser?: React.Dispatch<React.SetStateAction<any>>;
}

type DatabaseType = "postgres" | "mysql" | "mssql" | undefined | null;

interface UserData {
  name?: string;
  email?: string;
  password?: string;
  database?: string;
  tableName?: string;
  connectionString?: string;
  projectName?: string;
  databaseUserName?: string;
  databasePassword?: string;
}
