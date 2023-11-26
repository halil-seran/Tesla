import { Video } from "expo-av";
import { useMemo } from "react";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Dimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function TeslaX({ navigation }) {
  const opacity = useMemo(() => new Animated.Value(0), []);

  return (
    <View style={styles.container}>
      <View style={styles.background}>
        <Animated.View
          style={[styles.backgroundViewWrapper, { opacity: opacity }]}
        >
          <Video
            isLooping
            isMuted
            positionMillis={500}
            onLoad={() => {
              Animated.timing(opacity, {
                toValue: 1,
                useNativeDriver: true,
              }).start();
            }}
            resizeMode="cover"
            shouldPlay
            source={{
              uri: "https://digitalassets.tesla.com/tesla-contents/video/upload/f_auto,q_auto/Model-X-Main-Hero-Mobile-NA.mp4",
            }}
            style={{ flex: 1 }}
          />
        </Animated.View>
      </View>
      <View style={styles.overlay}>
        <View style={styles.header}>
          <Text style={styles.title}>TESLA</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Main")}>
            <Text style={styles.title}>MAIN</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.headerStyle}>Model X</Text>
        </View>
        <View>
          <Text style={styles.priceStyle}>From $68,590*</Text>
        </View>
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
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Orders", { carName: "TeslaX" })}
        >
          <Text
            style={[
              styles.carFeature,
              { color: "black", fontWeight: "500", marginBottom: 10 },
            ]}
          >
            ORDER NOW
          </Text>
        </TouchableOpacity>
        <Text style={[styles.carFeatureDetail, { fontSize: 10 }]}>
          *Price before savings is $74,990, excluding taxes and fees. {"\n "}
          Subject to change. Learn about est. gas savings.{"\n "} Specs
          displayed are Model S Plaid values.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "transparent",
    flex: 1,
    justifyContent: "center",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "black",
  },
  backgroundViewWrapper: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  title: {
    color: "white",
    fontSize: 25,
    marginTop: 50,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  headerStyle: {
    color: "white",
    fontSize: 45,
    marginTop: windowHeight / 6,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  priceStyle: {
    color: "white",
    fontSize: 25,
    marginTop: 10,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  carDetailsArea: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "80%",
    marginLeft: "10%",
    marginTop: windowHeight / 2.2,
  },
  carFeature: {
    color: "white",
    fontSize: 28,
    marginTop: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  carFeatureDetail: {
    color: "white",
    fontSize: 18,
    marginBottom: 5,
    paddingHorizontal: 30,
    textAlign: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 20,
    marginBottom: 20,
    marginLeft: "10%",
    width: "80%",
    borderRadius: 10,
  },
});
