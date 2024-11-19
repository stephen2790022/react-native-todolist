import { Fragment, useMemo } from "react";
import { Text, Image } from "react-native";
import { s } from "./header.style";

export const Header = () => {
  const logo = useMemo(() => require("@/assets/images/logo.png"), []);

  return (
    <Fragment key="Header">
      <Image source={logo} style={s.img} resizeMode="contain" />
      <Text style={s.subTitle}>Tu as surement des choses a faire</Text>
    </Fragment>
  );
};
