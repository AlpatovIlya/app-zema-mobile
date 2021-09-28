import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TextInputMask} from 'react-native-masked-text';
import {mainTheme} from '../../themes';
import {InputFieldType} from '../../types/components';

const InputPhoneField: FC<InputFieldType> = ({
  label,
  wrapperStyle,
  error,
  currentRef,
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
      <TextInputMask
        type={'cel-phone'}
        ref={currentRef}
        options={{
          maskType: 'BRL',
          withDDD: true,
          dddMask: '+7 (999) 999-99-99',
        }}
        style={[styles.input, inputErrorStyle]}
        maxLength={18}
        {...props}
      />
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

export default InputPhoneField;
