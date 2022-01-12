import React, { useState } from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import CreditCardForm from './components/creditCardForm';
const App: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.title}>Payment details</Text>
      <CreditCardForm />
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  content: {
    paddingTop: 95,
    paddingHorizontal: 37,
  },
  title: {
    fontFamily: 'Avenir-Heavy',
    color: 'black',
    fontSize: 31,
    marginBottom: 31,
  },
});
export default App;
