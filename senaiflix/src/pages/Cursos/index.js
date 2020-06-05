import React from "react";
import { View, Text, TouchableOpacity, KeyboardAvoidingView, Image } from "react-native";
import Style from "./style";
import logoImg from "../../assets/logo.png";
export default function Cursos({ navigation }) {
  return (
    <KeyboardAvoidingView style={Style.fora}>
        <View style={Style.logo}>
          <Image style={Style.img} source={logoImg} />
          <Text style={Style.well}>Cursos</Text>
          <Text style={Style.well}> 1 Desenvolvimento de Sistemas</Text>
        </View>
        <View style={Style.dentro}>
          <TouchableOpacity
            style={Style.submit}
            onPress={() => navigation.navigate("Disciplinas")}
          >
            <Text style={Style.submitText}>
              Ver disciplinas do curso
            </Text>
          </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
      

  );
}
