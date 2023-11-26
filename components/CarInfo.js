import { Text, View, StyleSheet } from "react-native";

export const carInfo = (carName) => {
  switch (carName) {
    case "TeslaS":
      return (
        <View style={styles.InfoContainer}>
          <Text style={styles.carModel}>Model S</Text>
          <Text style={styles.carDetail}>Est. Delivery: Nov – Dec 2023</Text>
          <Text style={styles.carDetail}>Delivery ZIP Code: 32100</Text>
        </View>
      );
    case "Tesla3":
      return (
        <View style={styles.InfoContainer}>
          <Text style={styles.carModel}>Model 3</Text>
          <Text style={styles.carDetail}>Est. Delivery: Nov – Dec 2023</Text>
          <Text style={styles.carDetail}>Delivery ZIP Code: 32100</Text>
        </View>
      );
    case "TeslaX":
      return (
        <View style={styles.InfoContainer}>
          <Text style={styles.carModel}>Model X</Text>
          <Text style={styles.carDetail}>
            Est. Delivery: Jan 2024 – Feb 2024
          </Text>
          <Text style={styles.carDetail}>Delivery ZIP Code: 32100</Text>
        </View>
      );
    case "TeslaY":
      return (
        <View style={styles.InfoContainer}>
          <Text style={styles.carModel}>Model Y</Text>
          <Text style={styles.carDetail}>Est. Delivery: Nov – Dec 2023</Text>
          <Text style={styles.carDetail}>Delivery ZIP Code: 32100</Text>
        </View>
      );
  }
};

const styles = StyleSheet.create({
  InfoContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  carModel: {
    fontSize: 40,
    fontWeight: "bold",
  },
  carDetail: {
    fontSize: 18,
    color: "#5c5e62",
  },
});
