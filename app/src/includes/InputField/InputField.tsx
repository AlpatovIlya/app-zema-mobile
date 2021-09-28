import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {mainTheme} from '../../themes';
import {InputFieldType} from '../../types/components';

const InputField: FC<InputFieldType> = ({
  label,
  wrapperStyle,
  error,
  ...props
}) => {
  const inputErrorStyle = {
    borderColor: error ? 'red' : mainTheme.color.line,
  };

  const labelErrorStyle = {
    color: error ? 'red' : mainTheme.color.text,
  };
  return (
    <View style={[styles.wrapper, wrapperStyle]}>
      <Text style={[styles.label, labelErrorStyle]}>{label}</Text>
      <TextInput style={[styles.input, inputErrorStyle]} {...props} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  label: {
    position: 'relative',
    zIndex: 1,
    fontSize: 12,
    color: mainTheme.color.text,
    marginBottom: -15,
    marginLeft: 10,
  },
  input: {
    backgroundColor: mainTheme.color.gray,
    borderColor: mainTheme.color.line,
    color: mainTheme.color.text,
    borderWidth: 1,
    borderRadius: 5,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    fontSize: 14,
  },
  error: {
    fontSize: 10,
    color: 'red',
  },
});

export default InputField;
