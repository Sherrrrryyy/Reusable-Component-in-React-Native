import React from "react";
import { StyleSheet, TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { ThemedText } from "./ThemedText";

export type ThemedButtonProps = TouchableOpacityProps & {
  bgColor?: string;
  textClr?: string;
  txt?: string;
  my?: number;
  mx?: number;
}

export const ThemedBtn = ({ bgColor,
  textClr,
  txt = "Button",
  my,
  mx,
  style
}: ThemedButtonProps) => {

  return (
    <TouchableOpacity style={[styles.btnContainer,
    bgColor && { backgroundColor: bgColor },
    mx ? { marginHorizontal: mx } : undefined,
    my ? { marginVertical: my } : undefined,
      style
    ]}>
      <ThemedText style={{ color: textClr ? textClr : "black" }}>
        {txt}
      </ThemedText>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  btnContainer: {
    height: 50,
    marginHorizontal: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#c1E1c5"
  }
})