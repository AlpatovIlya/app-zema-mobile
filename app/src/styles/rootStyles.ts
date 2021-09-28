import {StyleSheet} from 'react-native';
import {mainTheme} from '../themes';

const rootStyles = StyleSheet.create({
  title: {
    fontSize: 23,
    color: mainTheme.color.title,
    fontWeight: '500',
    lineHeight: 27,
  },
  text: {
    fontSize: 14,
    color: mainTheme.color.text,
    lineHeight: 21,
  },
  link: {
    textDecorationColor: mainTheme.color.main,
    color: mainTheme.color.main,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
});

export default rootStyles;
