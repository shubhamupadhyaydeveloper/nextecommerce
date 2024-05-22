import "next-auth"

declare module "next-auth" {
   interface User {
     _id? : string,
     isAdmin? : boolean,
     username? : string,
     isVerified? : boolean
   }

   interface Session {
    user: {
        _id?: string;
        isVerified?: boolean;
        isAdmin? : boolean;
        username?: string;
      } & DefaultSession['user'];
  }
}