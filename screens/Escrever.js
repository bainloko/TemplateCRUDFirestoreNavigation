import React, { useState } from 'react';
import {  View,  Text,  TextInput,  TouchableOpacity,  KeyboardAvoidingView
} from 'react-native';
import MeuEstilo from '../meuestilo'
import { auth,firestore } from '../firebase'

const Escrever = () => {
  const [nome, setNome] = useState('')
  const [raca, setRaca] = useState('')
  const [cor, setCor] = useState('')
  

  const enviarDados = () => {
     firestore
     .collection('Gato')
     .add({
       nome: nome,
       raca: raca, 
       cor: cor, 
     })
     .then(() => {
       alert('Gato '+nome+' Adicionado com Sucesso')
       
     });
    
  }

  const limparFormulario = () => {
  
  }

  return (
    <KeyboardAvoidingView
      style={MeuEstilo.container}
      behavior="padding"
    >
      <View style={MeuEstilo.inputContainer}>
        <TextInput
          placeholder="Nome"
          value={nome}
          onChangeText={text => setNome(text)}
          style={MeuEstilo.input}
        />
        <TextInput
          placeholder="Raça"
          value={raca}
          onChangeText={text => setRaca(text)}
          style={MeuEstilo.input}
        />
          <TextInput
          placeholder="Cor"
          value={cor}
          onChangeText={text => setCor(text)}
          style={MeuEstilo.input}
        />
       
      </View>

      <View style={MeuEstilo.buttonContainer}>
        <TouchableOpacity
          onPress={enviarDados}
          style={MeuEstilo.button}
        >
          <Text style={MeuEstilo.buttonText}>Enviar Dados</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={limparFormulario}
          style={[MeuEstilo.button, MeuEstilo.buttonOutline]}
        >
          <Text style={MeuEstilo.buttonOutlineText}>Limpar Formulario</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
export default Escrever

