import React from "react";
import { View, Text, KeyboardAvoidingView, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";
import { WebView } from 'react-native-webview';
export default function Desenvolvimento1({ navigation }) {
  return (
    <KeyboardAvoidingView style={Style.fora}>    
      <View style={Style.logo}>
        <View>
          <Image style={Style.img} source={logoImg} />
        </View>
        <Text style={Style.well}>Desenvolvimento 1</Text>
      </View>
      <View style={Style.dentro}>
        <View style={Style.player}>
          <WebView source={{ uri: 'https://www.youtube.com/watch?v=KlIL63MeyMY&list=PLHz_AreHm4dmGuLII3tsvryMMD7VgcT7x'}} allowsFullscreenVideo={true} />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}