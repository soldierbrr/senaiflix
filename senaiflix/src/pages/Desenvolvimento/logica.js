import React from "react";
import { View, Text, KeyboardAvoidingView, Image } from "react-native";
import logoImg from "../../assets/logo.png";
import Style from "./style";
import { WebView } from 'react-native-webview';
export default function Logica({ navigation }) {
  return (   
    <KeyboardAvoidingView style={Style.fora}> 
      <View style={Style.logo}>
        <View>
          <Image style={Style.img} source={logoImg} />
        </View>
        <Text style={Style.well}>Lógica de progração</Text>
      </View>
      <View style={Style.dentro}>
        <View style={Style.player}>
          <WebView source={{ uri: 'https://www.youtube.com/watch?v=Ds1n6aHchRU&list=PLInBAd9OZCzxxk0VvMGrq7l-ZMu5lOSwC'}} allowsFullscreenVideo={true} />
        </View>
      </View>
    </KeyboardAvoidingView> 
  );
}  
