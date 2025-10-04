import { Request, Response } from "express";

export const loginUser = (req: Request, res: Response) => {
  const { email, password } = req.body;

  if (email === "admin@mail.com" && password === "admin") {
    req.session.user = { email }; // 👈 guardamos el usuario en la sesión
    res.json({ message: "Login correcto", user: req.session.user });
  } else {
    res.status(401).json({ message: "Login incorrecto" });
  }
};


/*export const registerUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const user = await AuthService.register(email, password);
    res.json({ user });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};*/
