import React, { useState, useEffect } from 'react';
import {View,Text,StyleSheet,FlatList,TouchableOpacity, Alert,TextInput,Modal, Pressable} from 'react-native';
import axios from 'axios';


type Register = {
    id: number
    name: string;
    email: string;
    sex: string;
    status: string;
  };
  

const Register = () => {
  const [data, setData] = useState<Register[]>([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [sex, setSex] = useState('');
  const [status, setStatus] = useState('');


  const [isModalVisible,setIsModalVisible] = useState(false)

  const API_URL = 'http://localhost:3001';

  // Respomsible for getting data in the backend
  const fetchData = async () => {
    try {
      const response = await axios.get(`${API_URL}/registers`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
      Alert.alert('Error', 'Unable to fetch data');
    }
  };

  
  const addRegister = async () => {
    if (!name || !email || !sex || !status) {
      Alert.alert('Error', 'All fields are required');
      return;
    }

    try {
      await axios.post(`${API_URL}/register`, { name, sex, status, email });
      Alert.alert('Success', 'Registration added');
      setName('');
      setEmail('');
      setSex('');
      setStatus('');
      fetchData(); 
    } catch (error) {
      console.error('Error adding data:', error);
      Alert.alert('Error', 'Unable to add registration');
    }
  };

 
  const deleteRegister = async (id:number) => {
    try {
      await axios.delete(`${API_URL}/register/${id}`);
      Alert.alert('Success', 'Entry deleted');
      fetchData(); 
    } catch (error) {
      console.error('Error deleting data:', error);
      Alert.alert('Error', 'Unable to delete entry');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderCard = ({ item }: { item: Register }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>Name: {item.name}</Text>
      <Text style={styles.cardText}>Email: {item.email}</Text>
      <Text style={styles.cardText}>Sex: {item.sex}</Text>
      <Text style={styles.cardText}>Status: {item.status}</Text>
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => deleteRegister(item.id)}
      >
        <Text style={styles.deleteButtonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>User Register</Text>
      <FlatList
        data={data}
        renderItem={renderCard}
        keyExtractor={(item) => item.id.toString()}
        style={styles.list}
      />

    <Pressable style={{alignItems: 'flex-end'}} onPress={() => setIsModalVisible(true)}>
      <View style={styles.circle}>
        <View>
          <p style={{fontSize: 20, fontWeight: 'bold',verticalAlign: 'middle'}}>+</p>
        </View>
      </View>
    </Pressable>



<Modal 
  

    visible={isModalVisible}
    animationType='none'
    onRequestClose={() => setIsModalVisible(false)}
    transparent={true}
    >

<View  style={{display: 'flex',justifyContent: 'center',alignItems: 'center',margin: 'auto'}}>
  <View style={styles.addForm}>
          <TextInput
            style={styles.input}
            placeholder="Name"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            style={styles.input}
            placeholder="Sex"
            value={sex}
            onChangeText={setSex}
          />
          <TextInput
            style={styles.input}
            placeholder="Status"
            value={status}
            onChangeText={setStatus}
          />
          <TouchableOpacity style={styles.addButton} onPress={addRegister}>
            <Text style={styles.addButtonText}>Add</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.closeButton} onPress={() => setIsModalVisible(false)}>
            <Text style={styles.addButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>


    </Modal>

     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(213, 237, 159)',
    
  },
  circle:{
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor:'pointer',
    borderRadius: 25,
    textAlign: 'center'
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  list: {
    marginBottom: 16,
  },
  card: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardText: {
    fontSize: 16,
    marginBottom: 8,
  },
  deleteButton: {
    backgroundColor: '#ff4d4d',
    padding: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  addForm: {
    backgroundColor: 'whitesmoke',
    padding: 20,
    borderRadius: 8,
    shadowColor: 'grey',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 2,
    shadowRadius: 10,
    elevation: 5,
    width: 500,
   
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  addButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButton:{
    backgroundColor: 'rgb(255, 145, 0)',
    marginTop: 8,
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Register;
