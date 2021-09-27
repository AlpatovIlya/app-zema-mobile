import React, {FC, memo, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {ThemeContext} from '../context';

type Props = {
  label?: string;
  error?: string | null;
  wrapperStyle?: ViewStyle;
};

const InputField: FC<Props & TextInputProps> = ({
  label,
  wrapperStyle,
  error,
  ...props
}) => {
  const theme = useContext(ThemeContext);

  const labelStyle: TextStyle = {
    color: error ? theme.colors.error : theme.colors.text,
  };
  const inputStyle: TextStyle = {
    borderColor: error ? theme.colors.error : theme.colors.gray,
  };
  const errorStyle: TextStyle = {
    color: theme.colors.error,
  };

  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
      <TextInputMask
        type="cel-phone"
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '+7 (999) 999-99-99',
        }}
        style={[styles.input, inputStyle]}
        {...props}
      />
      {error && <Text style={[styles.error, errorStyle]}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  label: {
    position: 'relative',
    zIndex: 1,
    fontSize: 10,
    marginBottom: -19,
    marginLeft: 7,
    alignSelf: 'flex-start',
  },
  input: {
    fontSize: 14,
    borderRadius: 10,
    borderWidth: 1,
    paddingTop: 20,
    paddingBottom: 10,
    paddingHorizontal: 7,
  },
  error: {
    fontSize: 10,
    color: 'red',
  },
});

export default memo(InputField);
