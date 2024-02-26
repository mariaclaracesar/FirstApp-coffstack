import React from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

interface Props extends TouchableOpacityProps {
  title: string;
  variant?: "primary" | "secondary";
}

export function Button({ title, variant = "primary", style, ...rest }: Props) {
  const variantStyle =
    variant === "primary" ? styles.WrapperPrimary : styles.WrapperSecondary;

  const textColor = variant === "primary" ? "#fff" : "#1D013F";

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      //   onPress={onPress}
      style={[styles.WrapperCommon, variantStyle, style]}
      {...rest}
    >
      <Text style={[styles.Title, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  WrapperCommon: {
    height: 50,
    width: 300,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  WrapperPrimary: {
    backgroundColor: "#1D013F",
  },
  WrapperSecondary: {
    borderColor: "#1D013F",
    borderWidth: 2,
  },
  Title: { fontSize: 20, fontWeight: "bold" },
});
