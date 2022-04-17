interface ThemeInterface {
  colors: {
    background: string;
    text: string;
    keyBackground: string;
  };
}

export const theme: ThemeInterface = {
  colors: {
    background: 'black',
    text: 'white',
    keyBackground: 'grey',
  },
};
