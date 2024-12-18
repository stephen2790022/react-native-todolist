import { View } from "react-native";
import Dialog from "react-native-dialog";

type ModalProps = {
  handleModalOpen: () => void;
  handleInputChange: (value: string) => void;
  handleAdd: () => void;
  isOpen: boolean;
};

export const Modal = ({
  handleModalOpen,
  handleInputChange,
  handleAdd,
  isOpen,
}: ModalProps) => {
  return (
    <View>
      <Dialog.Container onBackdropPress={handleModalOpen} visible={isOpen}>
        <Dialog.Title>Add a new To do to the list</Dialog.Title>
        <Dialog.Input onChangeText={handleInputChange} />
        <Dialog.Button onPress={handleModalOpen} label="Cancel" />
        <Dialog.Button onPress={handleAdd} label="Add" />
      </Dialog.Container>
    </View>
  );
};
