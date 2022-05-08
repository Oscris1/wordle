import {View} from 'react-native';
import React from 'react';
import Row from './Row';

interface Props {
  currentRowArray: string[];
  rowIndex: number;
  colIndex: number;
  wordArray: string[];
}

const GameBoard: React.FC<Props> = ({
  currentRowArray,
  rowIndex,
  colIndex,
  wordArray,
}) => {
  return (
    <View style={{width: '100%'}}>
      {Array(6)
        .fill('')
        .map((_, index) => {
          if (index === rowIndex) {
            return (
              <Row
                currentRowArray={currentRowArray}
                colIndex={colIndex}
                wordArray={wordArray}
                test={index >= rowIndex}
              />
            );
          } else {
            return (
              <Row
                wordArray={wordArray}
                test={index > rowIndex}
                index={index}
              />
            );
          }
        })}
    </View>
  );
};

export default GameBoard;
