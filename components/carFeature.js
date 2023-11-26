import { Text, View, StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export const carFeature = (carName) => {
  switch (carName) {
    case "TeslaS":
      return (
        <View style={styles.carDetailsArea}>
          <View>
            <Text style={styles.carFeature}>395 mi</Text>
            <Text style={styles.carFeatureDetail}>Range(EPA)</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>1.99 s</Text>
            <Text style={styles.carFeatureDetail}>0-60 mph</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>200 mph</Text>
            <Text style={styles.carFeatureDetail}>Top Speed</Text>
          </View>
        </View>
      );
    case "Tesla3":
      return (
        <View style={styles.carDetailsArea}>
          <View>
            <Text style={styles.carFeature}>3.1 s</Text>
            <Text style={styles.carFeatureDetail}>0-60 mph</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>333 mi</Text>
            <Text style={styles.carFeatureDetail}>Range (EPA)</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>AWD</Text>
            <Text style={styles.carFeatureDetail}>Dual Motor</Text>
          </View>
        </View>
      );
    case "TeslaX":
      return (
        <View style={styles.carDetailsArea}>
          <View>
            <Text style={styles.carFeature}>333 mi</Text>
            <Text style={styles.carFeatureDetail}>Range(EPA)</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>2.5 s</Text>
            <Text style={styles.carFeatureDetail}>0-60 mph</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>9.9</Text>
            <Text style={styles.carFeatureDetail}>1/4 mile</Text>
          </View>
        </View>
      );
    case "TeslaY":
      return (
        <View style={styles.carDetailsArea}>
          <View>
            <Text style={styles.carFeature}>76 cu ft</Text>
            <Text style={styles.carFeatureDetail}>Cargo Space</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>330 mi</Text>
            <Text style={styles.carFeatureDetail}>Range (EPA)</Text>
          </View>
          <View>
            <Text style={styles.carFeature}>AWD</Text>
            <Text style={styles.carFeatureDetail}>Dual Motor</Text>
          </View>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  carDetailsArea: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    marginLeft: "10%",
  },
  carFeature: {
    color: "black",
    fontSize: 28,
    marginTop: 10,
    paddingHorizontal: 10,
    textAlign: "center",
    fontWeight: "bold",
  },
  carFeatureDetail: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
    paddingHorizontal: 30,
    textAlign: "center",
  },
});
