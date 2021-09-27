import React, {FC, ReactNode, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {ThemeContext} from '../context';

type Props = {
  wrapperStyle?: ViewStyle;
  children?: ReactNode;
};

const GradientButton: FC<Props & TouchableOpacityProps> = ({
  wrapperStyle,
  children,
  ...props
}) => {
  const theme = useContext(ThemeContext);
  return (
    <LinearGradient
      style={[
        styles.wrapper,
        wrapperStyle,
        {
          opacity: props.disabled ? 0.5 : 1,
        },
      ]}
      colors={[theme.colors.sub, theme.colors.main]}
      start={{
        x: 0,
        y: 0,
      }}>
      <TouchableOpacity {...props}>
        <Text style={styles.text}>{children}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 15,
  },
  text: {
    padding: 15,
    textAlign: 'center',
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
  },
});

export default GradientButton;
