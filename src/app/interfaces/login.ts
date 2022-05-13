export interface Login {
   data: [
    {
       adminID: number;
       user_name: string;
       password: string;
    }
  ],
  login: boolean;
  message: string;
}
