import * as React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { carImages } from "../components/carImages";
import { carInfo } from "../components/CarInfo";
import { carFeature } from "../components/carFeature";

import { Image } from "react-native";
import { Dimensions } from "react-native";
import { modelX } from "../components/modelX";
import { modelS } from "../components/modelS";
import { model3 } from "../components/model3";
import { modelY } from "../components/modelY";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

function Orders({ route, navigation }) {
  const { carName } = route.params;

  const model = (type) => {
    if (type === "TeslaS") {
      return modelS();
    } else if (type === "Tesla3") {
      return model3();
    } else if (type === "TeslaX") {
      return modelX();
    } else if (type === "TeslaY") {
      return modelY();
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/carImages/OrderHeader.png")}
        style={styles.headerContainer}
      />
      <ScrollView>
        <Image source={carImages(carName)} style={styles.carImage} />
        {carInfo(carName)}
        {carFeature(carName)}
        {model(carName)}
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: windowHeight / 6.5,
    resizeMode: "contain",
  },
  carImage: {
    width: windowWidth,
    height: windowWidth / 3,
  },
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  textStyle: {
    color: "black",
  },
});

export default Orders;
