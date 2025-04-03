interface User{
  fullName: string;
  username: string;
  email: string;
  password: string;
  login?: boolean;
  accessResetPass?: boolean
}

export type { User }