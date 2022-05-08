import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');

interface Props {
  letter: string;
  wordLength: number;
  isCurrentLetter: boolean;
  color: string | null;
}

const LetterBox: React.FC<Props> = ({
  letter,
  wordLength,
  isCurrentLetter,
  color,
}) => {
  return (
    <View
      style={[
        styles.container,
        isCurrentLetter && {borderColor: 'white', borderWidth: 2},
        color !== null && {backgroundColor: color},
        {width: width / wordLength - 10},
      ]}>
      <Text style={{color: 'white', fontSize: 20}}>{letter}</Text>
    </View>
  );
};

export default LetterBox;

const styles = StyleSheet.create({
  container: {
    maxWidth: '15%',
    aspectRatio: 1,
    margin: 1,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
