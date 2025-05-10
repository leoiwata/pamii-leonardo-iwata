import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8oDTiAFxzJLcKI25lfZ6bxkiOEJAlBvw",
  authDomain: "meu-primeiro-firebase-6223b.firebaseapp.com",
  projectId: "meu-primeiro-firebase-6223b",
  storageBucket: "meu-primeiro-firebase-6223b.firebasestorage.app",
  messagingSenderId: "772124965212",
  appId: "1:772124965212:web:10741aa04ef38b28b1a999"
};



firebase.initializeApp(firebaseConfig);


import React, { useEffect, useState } from 'react';
import { FlatList, Text, View } from 'react-native';

export default function App() {
  const [nomes, setNomes] =useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const nomesCollection = firebase.firestore().collection('Nomes');
      const snapshot = await nomesCollection.get();

      const data = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });

      setNomes(data);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center' }}>
      <Text>Lista de Nomes</Text>
      <FlatList
        data={nomes}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>
          </View>
        )}
    />
    </View>
  );
}