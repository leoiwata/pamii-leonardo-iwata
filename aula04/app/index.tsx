
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDdKcSHa_p-ViMO1_fOpM7Oh-yFpTnHiKc",
  authDomain: "meu-primeiro-firebase-c3354.firebaseapp.com",
  projectId: "meu-primeiro-firebase-c3354",
  storageBucket: "meu-primeiro-firebase-c3354.firebasestorage.app",
  messagingSenderId: "239917379884",
  appId: "1:239917379884:web:b1caf79f646fa9d829bc89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


import Rect,{useEffect, useState} from 'react';
import { View, Text, FlatList } from 'react-native';

export default function App() {
  const [nomes, setNomes] = useState([]);

  useEffect(() => {
    const nomesCollection = firebase.firestore().collection('Nomes');
    const snapshot = await nomesCollection.get();

    const data = [];
    snapshot.forEach((doc) => {
      data.push({id: doc.id, ...doc.data()});
    });
    setNomes(data);
    };

    fetchData();  
  },[]);

  return (
    <View style={{ flex: 1, justifycontent: 'center',
    alignItems: 'center'}}>
      <Text>Lista de Nomes:</Text>
      <FlatList
        data={nomes}
        keyExtractor={(itens) => ClipboardItem.id}
        renderItem={({ item}) => (
          <View>
            <Text>{item.Nome} {item.Sobrenome}</Text>