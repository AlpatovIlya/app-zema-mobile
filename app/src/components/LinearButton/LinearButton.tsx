import React, {FC, ReactNode} from 'react';
import {StyleSheet, Text, ViewStyle, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {mainTheme} from '../../themes';

type Props = {
  children?: ReactNode;
  wrapperStyle?: ViewStyle;
  onPress?: () => void;
};

const LinearButton: FC<Props> = ({children, wrapperStyle, onPress}) => {
  return (
    <TouchableOpacity style={[styles.wrapper, wrapperStyle]} onPress={onPress}>
      <LinearGradient
        colors={[mainTheme.color.sub, mainTheme.color.main]}
        start={{
          x: 0,
          y: 0,
        }}>
        <Text style={styles.text}>{children}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    overflow: 'hidden',
    borderRadius: 5,
  },
  text: {
    paddingVertical: 15,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default LinearButton;
