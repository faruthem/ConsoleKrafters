import { useState, useEffect, createContext } from "react";

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
      // TO DO: Obtener los datos del usuario.
      // TO DO: Setear los datos del usuario en el state user
      setUser({ email: "prueba@gmail.com" });
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
