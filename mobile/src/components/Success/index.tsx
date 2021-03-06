import React from 'react';
import { styles } from './styles';
import { Copyright } from '../Copyright';
import successImg from '../../assets/success.png';
import { View, Image, Text, TouchableOpacity } from 'react-native';

interface Props {
  onSendAnotherFeedback: () => void;
}

export function Success({onSendAnotherFeedback}: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={onSendAnotherFeedback}
      >
        <Text style={styles.buttonTitle}>
          Quero enviar outro
        </Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}