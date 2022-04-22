import React, {useState} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View, Text} from 'react-native';
import Keyboard from './components/Keyboard';
import GameBoard from './components/GameBoard/GameBoard';
import {theme} from './theme';

const App = () => {
  const WORD = 'hello';
  const wordArray = WORD.split('');
  const initArray = new Array(wordArray.length).fill('');
  const [currentRowArray, setCurrentRowArray] = useState<string[]>(initArray);

  const [rowIndex, setRowIndex] = useState<number>(0);
  const [colIndex, setColIndex] = useState<number>(0);

  const handlePressButton = (key: string) => {
    const rowCopy = [...currentRowArray];
    if (key === 'DEL') {
      colIndex > 0 && setColIndex(prev => prev - 1);
      rowCopy[colIndex - 1] = '';
      setCurrentRowArray(rowCopy);
      return;
    }
    if (key === 'ENTER') {
      if (colIndex === currentRowArray.length && rowIndex < 5) {
        console.log('dzialam');
        setCurrentRowArray(initArray);
        setColIndex(0);
        setRowIndex(prev => prev + 1);
      }
      return;
    }
    if (colIndex < currentRowArray.length) {
      rowCopy[colIndex] = key;
      setCurrentRowArray(rowCopy);
      setColIndex(prev => prev + 1);
      return;
    }
  };
  return (
    <SafeAreaView style={styles.rootContainer}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.header}>WORDLE</Text>
      <GameBoard currentRowArray={currentRowArray} rowIndex={rowIndex} />
      <Keyboard handlePressButton={handlePressButton} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  header: {
    color: theme.colors.text,
    alignSelf: 'center',
    fontSize: 30,
    fontWeight: '900',
  },
});

export default App;
