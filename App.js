import 'react-native-gesture-handler'
import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Escrever from './screens/Escrever'
import Listar from './screens/Listar'
import ListarComFiltro from './screens/ListarComFiltro'
import ListarComFiltroGatos from './screens/ListarComFiltroGatos'

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button
        onPress={() => navigation.navigate('Notifications')}
        title="Go to notifications"
      />
    </View>
  );
}

function NotificationsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={() => navigation.goBack()} title="Go back home" />
    </View>
  );
}

function EscreverScreen({ navigation }) {
  return (
    <Escrever></Escrever>
  );
}


function ListarScreen({ navigation }) {
  return (
    <Listar></Listar>
  );
}


function ListaComFiltroScreen({ navigation }) {
  return (
    <ListarComFiltro></ListarComFiltro>
  );
}

function ListaComFiltroGatosScreen({ navigation }) {
  return (
    <ListarComFiltroGatos></ListarComFiltroGatos>
  );
}


const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Notifications" component={NotificationsScreen} />
        <Drawer.Screen name="Escrever" component={EscreverScreen} />
        <Drawer.Screen name="Listar" component={ListarScreen} />
        <Drawer.Screen name="Lista Com Filtro Gatos" component={ListaComFiltroGatosScreen} />
        <Drawer.Screen name="Lista Com Filtro" component={ListaComFiltroScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
