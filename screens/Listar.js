import React ,{useState, useEffect} from 'react'
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { auth,firestore } from '../firebase'
// const DATA = [
//   {
//     id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
//     title: 'First Item',
//   },
//   {
//     id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
//     title: 'Second Item',
//   },
//   {
//     id: '58694a0f-3da1-471f-bd96-145571e29d72',
//     title: 'Third Item',
//   },
// ];

const Item = ({ nome }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{nome}</Text>
  </View>
);

const App = () => {
  
  const [gatos, setGatos]=useState([]);
  
  useEffect(()=>{

    getGatos()
  },[])

  const renderItem = ({ item }) => <Item nome={item.nome} />;

  const getGatos= ()=>{
    firestore
    .collection('Gato')
    .onSnapshot(querySnapshot=>{
      querySnapshot.forEach(documentSnapshot=>{
        gatos.push({...documentSnapshot.data(),
          key: documentSnapshot.nome,
        });
      });
      setGatos(gatos);
      // setCarregando(false);
    });
    // return()=>subscriber();
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={gatos} renderItem={renderItem} keyExtractor={item => item.nome} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;
