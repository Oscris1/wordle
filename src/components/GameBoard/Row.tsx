import {View, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import LetterBox from './LetterBox';

interface Props {
  currentRowArray: string[];
  isCurrent: boolean;
}

const Row: React.FC<Props> = ({currentRowArray, isCurrent = false}) => {
  const [localRow, setLocalRow] = useState<string[]>(Array(5).fill(''));

  useEffect(() => {
    if (isCurrent) setLocalRow(currentRowArray);
  }, [currentRowArray, isCurrent]);

  return (
    <View style={styles.row}>
      {localRow.map(letter => (
        <LetterBox letter={letter} wordLength={localRow.length} />
      ))}
    </View>
  );
};

export default Row;

const styles = StyleSheet.create({
  row: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
