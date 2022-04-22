import {View, Text} from 'react-native';
import React from 'react';
import Row from './Row';

interface Props {
  currentRowArray: string[];
  rowIndex: number;
}

const GameBoard: React.FC<Props> = ({currentRowArray, rowIndex}) => {
  return (
    <View style={{width: '100%'}}>
      {Array(6)
        .fill('')
        .map((_, index) => (
          <Row
            currentRowArray={currentRowArray}
            isCurrent={index === rowIndex}
          />
        ))}
    </View>
  );
};

export default GameBoard;
