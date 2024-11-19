import { Text, TouchableOpacity } from "react-native";
import { s } from "./add-btn.style";

type AddBtnProps = {
  handleModalOpen: () => void;
};

export const AddBtn = ({ handleModalOpen }: AddBtnProps) => {
  return (
    <TouchableOpacity onPress={handleModalOpen} style={s.btnStyle}>
      <Text style={s.btnText}>+ Add</Text>
    </TouchableOpacity>
  );
};
