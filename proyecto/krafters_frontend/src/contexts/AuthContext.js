import { useState, useEffect, createContext } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const userCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  const login = async (token) => {
    try {
      // TO DO: Setear el token en el localStorage
      tokenCtrl.setToken(token);
      // TO DO: Obtener los datos del usuario.
      const response = await userCtrl.getMe();
      //console.log(response);
      // TO DO: Setear los datos del usuario en el state user
      setUser(response);
      // TO DO: Setear el valor de token en el state token
      setToken(token);
      // TO DO: Hacer un setLoading false
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout: null,
    updateUser: null,
  };

  if (loading) return null;

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
