import nextAuth from "next-auth";
import { nextOptions } from "./option";

const handler = nextAuth(nextOptions);

export  {handler as GET , handler as POST}