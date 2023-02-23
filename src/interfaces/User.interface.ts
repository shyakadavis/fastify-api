export interface ICreateUser {
  name: string;
  email: string;
  age: number;
  role?: 'ADMIN' | 'USER';
  userPreference?: IUserPreferences;
}

export interface IUserPreferences {
  create: {
    emailUpdates: boolean;
  };
}

export interface IUpdateData {
  name: string;
  age: number;
  role?: 'ADMIN' | 'USER';
  userPreference?: IUpdateUserPreferences;
}

export interface IUpdateUserPreferences {
  update: {
    emailUpdates: boolean;
  };
}
