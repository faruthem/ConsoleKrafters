import { useState } from "react";
import { Button, Icon } from "semantic-ui-react";
import { BasicModal, Confirm } from "@/components/Shared";
import { Address as AddressCtrl } from "@/api";
import { AddressForm } from "../../AddressForm";
import styles from "./Address.module.scss";

const addressCtrl = new AddressCtrl();

export function Address(props) {
  const { addressId, address, onReload } = props;
  const [showEdit, setShowedit] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onDelete = async () => {
    try {
      await addressCtrl.delete(addressId);
      onReload();
    } catch (error) {
      console.error(error);
    }
  };

  const openCloseEdit = () => setShowedit((prevState) => !prevState);
  const openCloseConfirm = () => setShowConfirm((prevState) => !prevState);

  return (
    <>
      <div className={styles.address}>
        <div>
          <p className={styles.title}>{address.title}:</p>
          <p className={styles.addressInfo}>
            {address.name}, {address.address}, {address.state}, {address.city},{" "}
            {address.postal_code}
          </p>
        </div>
        <div className={styles.actions}>
          <Button primary icon onClick={openCloseEdit}>
            <Icon name="pencil"></Icon>
          </Button>
          <Button primary icon onClick={openCloseConfirm}>
            <Icon name="delete"></Icon>
          </Button>
        </div>
      </div>

      <Confirm
        open={showConfirm}
        onCancel={openCloseConfirm}
        onConfirm={onDelete}
        content="¿Estás seguro de que deseas eliminar la dirección?"
      />
      <BasicModal
        show={showEdit}
        onClose={openCloseEdit}
        title="Editar dirección"
      >
        <AddressForm
          onClose={openCloseEdit}
          onReload={onReload}
          addressId={addressId}
          address={address}
        />
      </BasicModal>
    </>
  );
}
