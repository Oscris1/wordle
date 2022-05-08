import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import LetterBox from './LetterBox';

interface Props {
  currentRowArray?: string[];
  colIndex?: number;
  wordArray?: string[];
}

const Row: React.FC<Props> = ({
  currentRowArray,
  colIndex,
  wordArray,
  test,
  index,
}) => {
  const [localRow, setLocalRow] = useState<string[]>(Array(5).fill(''));

  const returnColor = (letter: string, index: number, array: string[] = []) => {
    if (test) return null;
    else if (letter === array[index]) return 'green';
    else if (array.includes(letter)) return 'orange';
    else if (letter && !array.includes(letter)) return 'gray';
    else return null;
  };

  useEffect(() => {
    if (currentRowArray) setLocalRow(currentRowArray);
  }, [currentRowArray]);

  console.log('render', index);

  return (
    <View style={styles.row}>
      {localRow.map((letter, index) => (
        <LetterBox
          letter={letter}
          wordLength={localRow.length}
          isCurrentLetter={colIndex === index}
          color={returnColor(letter, index, wordArray)}
        />
      ))}
    </View>
  );
};

export default React.memo(Row);

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
