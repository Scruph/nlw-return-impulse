import React from 'react';
import { styles } from './styles';
import { Option } from '../Option';
import { Copyright } from '../Copyright';
import { FeedbackType } from '../Widget';
import { View, Text } from 'react-native';
import { feedbackTypes } from '../../utils/feedbackTypes';

interface Props {
  onFeedbackTypeChanged: (feedbackTypes: FeedbackType) => void;
}

export function Options({onFeedbackTypeChanged}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Deixe seu feedback
      </Text>

      <View style={styles.options}>
        {
          Object
          .entries(feedbackTypes)
          .map(([key, value]) => (
            <Option 
              key={key}
              title={value.title}
              image={value.image}
              onPress={() => onFeedbackTypeChanged(key as FeedbackType)}
            />
          ))
        }
      </View>
      
      <Copyright />
    </View>
  );
}