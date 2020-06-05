import React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import Style from "./style";
import logoImg from "../../assets/logo.png";

export default function Disciplinas({ navigation }) {
  return (

     
    <KeyboardAvoidingView style={Style.fora}>
        <View style={Style.logo}>
          <Image style={Style.img} source={logoImg} />
          <Text style={Style.well}>Desenvolvimento de Sistemas</Text>
        </View>
        <View style={Style.dentro}>
          <TouchableOpacity
            style={Style.submit}
            onPress={() => navigation.navigate("Logica De Programação")}>
            <Text style={Style.submitText}>
              Lógica de programação
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={Style.submit}
            onPress={() => navigation.navigate("Desenvolvimento 1")}>
            <Text style={Style.submitText}>
              Desenvolvimento de Sistemas 1
            </Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
      
  );
}
