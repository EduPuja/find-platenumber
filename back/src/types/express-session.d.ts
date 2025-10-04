import "express-session";


//interfice para definir el que guardem a la session en aquest cas un usuari amb email
declare module "express-session" {
  interface SessionData {
    user?: {
      email: string;
    };
  }
}