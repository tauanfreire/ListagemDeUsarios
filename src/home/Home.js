import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native'




export default function Home(){

  const [posicao, setPosicao] = useState("")
  const [id, setId] = useState()
  const [nome, setNome] = useState("")
  const [endereco, setEndereco] = useState("")
  const [cidade, setCidade] = useState("")
  const [bairro, setBairro] = useState("")
  const [telefone, setTelefone] = useState("")

  function api(){
    fetch('http://brunovicente.tech:3100/perfil')
    .then((dados) => dados.json())
    .then((json) => {
      setId(1)
      setNome(json[posicao].nome)
      setEndereco(json[posicao].endereco)
      setCidade(json[posicao].cidade)
      setBairro(json[posicao].bairro)
      setTelefone(json[posicao].telefone)
    })
    .catch((error) => console.error(error))
  }

  function procurarUser(){
    api()
  }
  
  
    return (
      <View style={styles.container}>
        <View style={styles.topBar}>
          <Text style={styles.title}>Listagem de Usuários</Text>
        </View>

        <View style={styles.main}>
            <Text style={styles.subTitle}>Buscar usuário por posição</Text>
            <Text style={styles.nota}>Min = 0 | Max = 19</Text>
          <View style={styles.busca}>
            <TextInput style={styles.input} value={posicao} onChangeText={(posicaoAtual) => {setPosicao(posicaoAtual)}} placeholder="DIGITE A POSIÇÂO" />
            <TouchableOpacity onPress={procurarUser} style={styles.button}>
                <Text style={styles.texts}>BUSCAR</Text>
            </TouchableOpacity>
          </View>

          <View>
            <TextInput style={styles.textInputs} value={id} placeholder="ID"/>
            <TextInput style={styles.textInputs} value={nome} placeholder="NOME"/>
            <TextInput style={styles.textInputs} value={endereco} placeholder="ENDEREÇO"/>
            <TextInput style={styles.textInputs} value={cidade} placeholder="CIDADE"/>
            <TextInput style={styles.textInputs} value={bairro} placeholder="BAIRRO"/>
            <TextInput style={styles.textInputs} value={telefone} placeholder="TELEFONE"/>
          </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    subTitle:{
      fontSize: 20,
      fontFamily: "verdana",
      textAlign: "center",
      color: "red"
    },
    texts: {
        color: "white",
      fontWeight: "bold"

    },
    nota: {
      textAlign: "center",
      fontSize: 13,
      marginTop: 10,
      fontWeight: "bold"
    },
    title: {
        color: "white",
        fontSize: 25,
        fontWeight: "bold",
    },
    topBar:{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "darkcyan",
        height: 80,
        width: "100%",
        marginTop: 30
    },
    main:{
        marginTop: 50,
    },
    input:{
        textAlign: "center",
        borderWidth: 1,
        borderColor: "gray",
        alignItems: "center",
        justifyContent: "center",
        marginRight: 80,
        width: 150,
        borderRadius: 10
    },
    busca:{
      marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
    },
    button:{
        backgroundColor: "darkcyan",
        borderRadius: 3,
        padding: 13,
        borderRadius: 10,
        // marginLeft: 10,
        justifyContent: "center",
        alignItems: "center"
    },
    textInputs:{
      width: "100%",
      borderWidth: 1,
      marginTop: 30,
      borderRadius: 10,

    }
})