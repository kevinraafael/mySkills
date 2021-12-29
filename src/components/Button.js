import React from 'react';

import {TouchableOpacity, Text, StyleSheet} from 'react-native';

//Toda vez que ele clicar em Onpress , vai chamar a propriedade que está sendo passada pelo parâmetro
export function Button({onPress}) {
  return (
    <TouchableOpacity
      style={styles.button}
      activeOpacity={0.7}
      onPress={onPress}>
      <Text style={styles.buttonText}>Add</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#A370F7',
    padding: 15,
    borderRadius: 7,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
