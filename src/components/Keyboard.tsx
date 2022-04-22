import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {theme} from '../theme';

const KEYS: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm', 'ż'],
  ['DEL', 'ą', 'ę', 'ł', 'ć', 'ó', 'ś', 'ENTER'],
];

interface Props {
  handlePressButton: (key: string) => void;
}

const {width} = Dimensions.get('window');
const KEY_WIDTH = (width - 20) / KEYS[0].length;

const Keyboard: React.FC<Props> = ({handlePressButton}) => {
  const keyWidth = (key: string) => {
    if (key === 'DEL') return 60;
    if (key === 'ENTER') return 80;
    return KEY_WIDTH - 3;
  };

  return (
    <View style={styles.container}>
      {KEYS.map(row => (
        <View style={styles.row}>
          {row.map(key => (
            <TouchableOpacity
              onPress={() => handlePressButton(key)}
              style={[styles.key, {width: keyWidth(key)}]}>
              <Text style={styles.keyText}>{key}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 'auto',
    width: '100%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  key: {
    backgroundColor: theme.colors.keyBackground,
    height: KEY_WIDTH * 1.3,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    borderRadius: 5,
  },
  keyText: {
    fontSize: 25,
    color: theme.colors.text,
  },
});

export default Keyboard;
