import React, { useState, useEffect } from 'react';
import { ActivityIndicator, SafeAreaView, View, FlatList, Text, StyleSheet } from 'react-native';
import { auth, firestore } from '../firebase';
import MeuEstilo from '../meuestilo';

const Listar = () => {
  const [loading, setLoading] = useState(true);
  const [gatos, setGatos] = useState([]);

  useEffect(() => {
    const subscriber = firestore.collection('Gato')
      .onSnapshot(querySnapshot => {
        const gatos = [];
        querySnapshot.forEach(documentSnapshot => {
          gatos.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.nome,
          });
        });
        setGatos(gatos);
        setLoading(false);
      });
    // Unsubscribe from events when no longer in use
    return () => subscriber();
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

const Item = ({ nome }) => (
  <View style={MeuEstilo.item}>
    <Text style={MeuEstilo.title}>{nome}</Text>
  </View>
  );
  
  const renderItem = ({ item }) => <Item nome={item.nome} />;

  // const getGatos= ()=>{
  //   setGatos([]);
  //   firestore
  //   .collection('Gato')
  //   .onSnapshot(querySnapshot=>{
  //     //querySnapshot.forEach(documentSnapshot=>{
  //     querySnapshot.docChanges().forEach(change=>{
        
  //       gatos.push({...change.doc.data(),
  //         key: change.nome,
  //       });
  //     });
  //     setGatos(gatos);
  //     // setCarregando(false);
  //   });
  //   // return()=>subscriber();
  // };

  // // const observador = firestore.collection('Gato')
  // // .onSnapshot(querySnapshot => {
  // //   querySnapshot.docChanges().forEach(change => {
  // //     if (change.type === 'added') {
  // //       console.log('Novo Gato: ', change.doc.data());
  // //     }
  // //     if (change.type === 'modified') {
  // //       console.log('Gato modificado: ', change.doc.data());
  // //     }
  // //     if (change.type === 'removed') {
  // //       console.log('Gato removido: ', change.doc.data());
  // //     }
  // //   });
  // // });

  return (
    <SafeAreaView style={MeuEstilo.containerlistar}>
      <FlatList 
        data={gatos} 
        renderItem={renderItem} 
        keyExtractor={item => item.nome} 
        // refreshing={true}
        // onRefresh={() => {
        //   getGatos();
        // }}
      />
    </SafeAreaView>
  );
};

// const MeuEstilo = StyleSheet.create({
//   containerlistar: {
//     flex: 1,
//     marginTop: StatusBar.currentHeight || 0,
//   },
//   item: {
//     backgroundColor: 'white',
//     padding: 20,
//     marginVertical: 8,
//     marginHorizontal: 16,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//     borderRadius: 10,
//   },
//   title: {
//     fontSize: 16,
//     color: '#0782F9',
//     fontWeight: '700',
//   },
// });

export default Listar;
