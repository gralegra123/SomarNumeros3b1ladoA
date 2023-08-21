import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

const App = () => {
  const[inputValues, setInputValues] = useState({
  input1: '', 
  input2: '',
  input3:'',
  input4:'',
  input5:'',

  });

const [sum, setSum] = useState(0);

const handleInputChange = (inputName, value) => {
  setInputValues({...inputValues, [inputName]: value
  });
 };
 const handleSum = () => {
  const {input1, input2, input3, input4, input5} = inputValues;
  const result = parseInt (input1) + parseInt (input2) + parseInt(input3) + parseInt(input4) + parseInt(input5);
  setSum (result);
 };


  return (
    <View style={styles.container}>

      <Text style={styles.label}>input 1:</Text>
      <TextInput

      style={styles.input1}
      onChangeText={(value) => handleInputChange('input1', value)}
      value={inputValues.input1}
      keyboardType="numeric"
      />

      <Text style={styles.label}>input 2:</Text>
      <TextInput
        
        style={styles.input2}
        onChangeText={(value) => handleInputChange('input2', value)}
        value={inputValues.input2}
        keyboardType="numeric"
        />

        <Text style={styles.label}>input 3: </Text>
        <TextInput 

        style={styles.input3}
        onChangeText={(value) => handleInputChange('input3', value)}
        value={inputValues.input3}
        kayboardType="numeric"
        />

        <Text style={styles.label}>input 4: </Text>
        <TextInput

        style={styles.input4}
        onChangeText={(value) => handleInputChange('input4', value)}
        value={inputValues.input4}
        kayboardType="numeric"
        />

        <Text style={styles.label}>input 5: </Text>
        <TextInput

        style={styles.input5}
        onChangeText={(value) => handleInputChange('input5', value)}
        value={inputValues.input5}
        keyboardType="numeric"
        />


      <Button color="#AD94FA" title="Somar"onPress={handleSum}/>
      <Text style={styles.result}>Resultado: {sum} </Text>

    </View>
  );

  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EC94FA',
    padding: 20,
  },
});

export default App;