import { StyleSheet } from "react-native";
import { Custom, Typography, Colors } from "styles";

const Styles = StyleSheet.create({
  container: {
    paddingVertical: "10%",
  },
  formView: {
    marginTop: "10%",
    alignItems: "center",
    width:'100%'
  },
  absolute: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
  },
  doModalContainer:{
    height: '60%',
    width:'94%', 
    marginLeft:'3%',
    marginRight:'3%',
    marginTop: 'auto',
    marginBottom:'auto',
    borderRadius:50, 
    backgroundColor:'linear-gradient(20.23deg, rgba(29, 39, 49, 0.9) -4.86%, rgba(53, 96, 104, 0.9) 114.68%)',
    overflow: 'hidden',
    padding:15,  
    borderColor: 'rgba(53, 96, 104, 0.9)',
    borderWidth: 1,
  },
  heading: {
    fontSize: Typography.FONT_SIZE_28,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
  },
  labelStyle: {
    textTransform: "uppercase",
    color: "#62737E",
    zIndex: 100,
    fontWeight: "bold",
    fontSize: 10,
  }
});

export default Styles;
