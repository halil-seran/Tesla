import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/carImages/Header.jpeg")}
        style={styles.headerContainer}
      />
      <Text style={styles.textStyle}>Explore Our Vehicles</Text>
      <ScrollView horizontal={true}>
        <TouchableOpacity
          style={styles.cardStyles}
          onPress={() => navigation.navigate("TeslaS")}
        >
          <Image
            source={require("../assets/carImages/teslaS.jpeg")}
            style={styles.imageContainer}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardStyles}
          onPress={() => navigation.navigate("Tesla3")}
        >
          <Image
            source={require("../assets/carImages/tesla3.jpeg")}
            style={styles.imageContainer}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardStyles}
          onPress={() => navigation.navigate("TeslaX")}
        >
          <Image
            source={require("../assets/carImages/teslaX.jpeg")}
            style={styles.imageContainer}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardStyles}
          onPress={() => navigation.navigate("TeslaY")}
        >
          <Image
            source={require("../assets/carImages/teslaY.jpeg")}
            style={styles.imageContainer}
          />
        </TouchableOpacity>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#161719",
    alignItems: "center",
  },
  headerContainer: {
    width: "100%",
    height: windowHeight / 5,
    resizeMode: "contain",
  },
  textStyle: {
    paddingRight: windowWidth / 4,
    color: "#f6f6f6",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 40,
  },
  cardStyles: {
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    margin: 12,
    height: windowHeight / 2,
    width: windowWidth / 1.4,
    overflow: "hidden",
  },
  imageContainer: {
    width: windowWidth / 1.4,
    height: windowHeight / 2,
  },
});
