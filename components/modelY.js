import { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Switch,
  Modal,
  Pressable,
  TouchableOpacity,
} from "react-native";
import RNPickerSelect from "react-native-picker-select";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const modelY = () => {
  const [totalPrice, setTotalPrice] = useState(32890);
  const [price, setPrice] = useState(32890);
  const [color, setColor] = useState("Pearl White Multi-Coat");
  const [wheels, setWheels] = useState("20” Induction Wheels");
  const [interior, setInterior] = useState("All Black");
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    let wheelsPrice = 0;
    let interiorPrice = 0;
    if (wheels === '21" Induction Wheels') {
      wheelsPrice = 2000;
    }
    if (interior !== "All Black") {
      interiorPrice = 1000;
    }
    setTotalPrice(price + wheelsPrice + interiorPrice);
  }, [price, wheels, interior]);

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={{ fontWeight: "800", fontSize: 30 }}>
                Finance Options
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Ionicons name="ios-close" size={30} color="black" />
              </Pressable>
            </View>
            <Text style={{ fontSize: 14, fontWeight: "400" }}>32100</Text>
            <Text style={{ fontSize: 14, fontWeight: "400", marginTop: 20 }}>
              Financing selection and terms will be confirmed after order
            </Text>
            <View style={styles.switchArea}>
              <Switch />
              <Text>Include Est. Taxes and Fees</Text>
            </View>
            <View style={[styles.switchArea, { width: "90%" }]}>
              <AntDesign name="exclamationcircle" size={24} color="red" />
              <Text style={{ marginLeft: 10 }}>
                Taxes and fees are not available to show, try again later.
              </Text>
            </View>
            <View style={styles.textStyles}>
              <Text style={{ fontWeight: 600 }}>Vehicle Price</Text>
              <Text style={{ fontWeight: 600 }}>${totalPrice}</Text>
            </View>
            <View
              style={{ height: 2, backgroundColor: "black", marginTop: 7 }}
            ></View>
            <View style={styles.textStyles}>
              <Text>Federal Tax Credit</Text>
              <Text>- $7,500</Text>
            </View>
            <View style={styles.textStyles}>
              <Text>Est. 3-year gas savings</Text>
              <Text>- $3,600</Text>
            </View>
            <View style={styles.textStyles}>
              <Text>Trade-in Value</Text>
              <Text>Get an Estimate</Text>
            </View>
            <View style={styles.textStyles}>
              <Text style={{ fontWeight: 600 }}>
                Price after probable savings
              </Text>
              <Text style={{ fontWeight: 600 }}>${totalPrice - 11100}</Text>
            </View>
            <View
              style={{ height: 2, backgroundColor: "black", marginTop: 7 }}
            ></View>
            <View style={styles.textStyles}>
              <Text>Destination fee</Text>
              <Text>$1,390</Text>
            </View>
            <Text style={{ marginTop: 20 }}>
              Taxes and fees listed are estimates only, subject to change, and
              may not be accurate to you, depending on factors like your
              registration location. Your applicable taxes and fees will be
              confirmed for you closer to time of delivery.
            </Text>
            <TouchableOpacity>
              <Text
                style={{
                  marginTop: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                  fontSize: 25,
                }}
              >
                Order Now
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <>
        <Text style={styles.motorTypeText}>Motor Type All-Wheel Drive</Text>
        <View style={styles.modelPicker}>
          <RNPickerSelect
            onValueChange={(value) => setPrice(value)}
            placeholder={{
              label: "Model Y   $32,890",
              value: 32890,
            }}
            items={[
              { label: "Model Y Long Range   $37,890", value: 37890 },
              { label: "Model Y Performance   $41,390", value: 41390 },
            ]}
          />
          <Text style={styles.motorTypeInfo}>
            All prices are shown without probable incentives or est. 3-year gas
            savings of $3,900.
          </Text>
        </View>
        <Text style={styles.motorTypeText}>Paint</Text>
        <View style={styles.modelPicker}>
          <RNPickerSelect
            onValueChange={(value) => setColor(value)}
            placeholder={{
              label: "Midnight Silver Metallic",
              value: "Midnight Silver Metallic",
            }}
            items={[
              {
                label: "Pearl White Multi-Coat",
                value: "Pearl White Multi-Coat",
              },
              { label: "Deep Blue Metallic", value: "Deep Blue Metallic" },
              { label: "Solid Black", value: "Solid Black" },
              { label: "Red Multi-Coat", value: "Red Multi-Coat" },
            ]}
          />
          <Text style={styles.colorStyle}>{color}</Text>
          <Text style={styles.colorDetailStyle}>Included</Text>
        </View>
        <Text style={styles.motorTypeText}>Wheels</Text>
        <View style={styles.modelPicker}>
          <RNPickerSelect
            onValueChange={(value) => setWheels(value)}
            placeholder={{
              label: '19" Gemini Wheels',
              value: '19" Gemini Wheels',
            }}
            items={[
              {
                label: '21" Induction Wheels',
                value: '21" Induction Wheels',
              },
            ]}
          />
          <Text style={styles.colorStyle}>{wheels}</Text>
          {wheels === '19" Gemini Wheels' ? (
            <>
              <Text style={styles.colorDetailStyle}>Included</Text>
              <Text style={styles.colorDetailStyle}>
                Range (EPA est.) : 260mi
              </Text>
            </>
          ) : (
            <>
              <Text style={styles.colorDetailStyle}>$2,000</Text>
              <Text style={styles.colorDetailStyle}>Range (est.) : 242mi</Text>
            </>
          )}
          <Text style={styles.motorTypeInfo}>All-Season Tires</Text>
        </View>
        <Text style={styles.motorTypeText}>Interior</Text>
        <View style={styles.modelPicker}>
          <RNPickerSelect
            onValueChange={(value) => setInterior(value)}
            placeholder={{
              label: "All Black",
              value: "All Black",
            }}
            items={[{ label: "Black and White", value: "Black and White" }]}
          />
          <Text style={styles.colorStyle}>{interior}</Text>
          {interior === "All Black" ? (
            <>
              <Text style={styles.colorDetailStyle}>Included</Text>
            </>
          ) : (
            <>
              <Text style={styles.colorDetailStyle}>$1,000</Text>
            </>
          )}
        </View>
        <Pressable
          onPress={() => setModalVisible(true)}
          style={styles.cartArea}
        >
          <Text style={styles.colorStyle}>
            ${totalPrice} Vehicle Price{" "}
            <AntDesign name="upcircle" size={18} color="black" />
          </Text>
          <Text style={[styles.colorStyle, { fontWeight: "300" }]}>
            ${totalPrice - 3900} After Probable Savings
          </Text>
        </Pressable>
      </>
    </View>
  );
};

export const styles = StyleSheet.create({
  motorTypeText: {
    color: "black",
    fontSize: 18,
    marginTop: 40,
    marginLeft: "5%",
    fontWeight: "500",
  },
  modelPicker: {
    width: "90%",
    marginLeft: "5%",
  },
  motorTypeInfo: {
    color: "black",
    fontSize: 12,
    marginTop: 5,
    marginLeft: "5%",
    marginRight: "5%",
    fontWeight: "300",
    textAlign: "center",
  },
  colorStyle: {
    color: "black",
    fontSize: 18,
    marginTop: 5,
    fontWeight: "400",
    textAlign: "center",
  },
  colorDetailStyle: {
    color: "black",
    fontSize: 12,
    marginTop: 5,
    fontWeight: "300",
    textAlign: "center",
  },
  cartArea: {
    width: "100%",
    marginTop: 20,
    height: 80,
    backgroundColor: "#e6e6e6",
    justifyContent: "center",
  },
  centeredView: {
    flex: 1,
    width: "80%",
    height: "70%",
    marginLeft: "10%",
    marginTop: "20%",
  },
  modalView: {
    height: "70%",
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  switchArea: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    alignItems: "center",
  },
  textStyles: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 10,
  },
});
