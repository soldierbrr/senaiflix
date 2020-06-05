import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Cursos from "./pages/Cursos";
import Disciplinas from "./pages/Disciplinas";
import Logica from "./pages/Desenvolvimento/logica";
import Desenvolvimento1 from "./pages/Desenvolvimento/desenvolvimento1";
const Drawer = createDrawerNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Cursos" component={Cursos} />
        <Drawer.Screen name="Disciplinas" component={Disciplinas} />
        <Drawer.Screen name="Logica De Programação" component={Logica} />
        <Drawer.Screen name="Desenvolvimento 1" component={Desenvolvimento1} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}