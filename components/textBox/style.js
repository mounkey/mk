import Color from "../../constants/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  
  TextInput: {
    height: 33,
    color: Color.primary,
    backgroundColor: Color.letter,
    fontSize: 15,
    selectionColor: Color.letter,
    placeholderTextColor: Color.primary,
    marginBottom: 15,
    padding: 5,
    width: 170,
    borderRadius: 5,
  },

});