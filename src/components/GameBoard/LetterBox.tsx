import {View, Text, Dimensions, StyleSheet} from 'react-native';
import React from 'react';
const {width} = Dimensions.get('window');

interface Props {
  letter: string;
  wordLength: number;
}

const LetterBox: React.FC<Props> = ({letter, wordLength}) => {
  return (
    <View style={[styles.container, {width: width / wordLength - 10}]}>
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
