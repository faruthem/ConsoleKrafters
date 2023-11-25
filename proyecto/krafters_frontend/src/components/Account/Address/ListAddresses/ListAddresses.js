import { useState, useEffect } from "react";
import { Address } from "@/api";
import { useAuth } from "@/hooks";
import styles from "./ListAddresses.module.scss";

const addressCtrl = new Address();

export function ListAddresses() {
  const [addresses, setAddresses] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    (async () => {
      try {
        const response = await addressCtrl.getAll(user.id);
        setAddresses(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  if (!addresses) return null;
  return (
    <div>
      <h2>Somos Direcciones </h2>
    </div>
  );
}
