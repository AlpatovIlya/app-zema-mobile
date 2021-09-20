import React, {FC, useContext} from 'react';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ThemeContext} from '../context';
import {GradientButton, InputField} from '../includes';
import {rootStyles} from '../styles';

const SignInScreen: FC = () => {
  const theme = useContext(ThemeContext);

  const titleStyle: TextStyle = {
    color: theme.colors.title,
  };
  const formStyle: ViewStyle = {
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.card,
    marginHorizontal: theme.paddingHorizontal * 3,
  };

  return (
    <SafeAreaView edges={['bottom']}>
      <View style={[styles.form, formStyle]}>
        <Text style={[rootStyles.title, styles.title, titleStyle]}>
          Вход в личный кабинет
        </Text>
        <InputField
          wrapperStyle={styles.inputWrapper}
          label={'Логин'}
          placeholder="+7 (xxx) xxx-xx-xx"
          error={'Номер телефона введен некоректно'}
        />
        <InputField
          wrapperStyle={styles.inputWrapper}
          label={'Пароль'}
          placeholder="*******"
          secureTextEntry={true}
        />
        <GradientButton>Войти</GradientButton>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 100,
    borderRadius: 20,
    paddingTop: 58,
    paddingHorizontal: 45,
    paddingBottom: 45,
  },
  title: {
    textAlign: 'center',
    marginBottom: 50,
  },
  inputWrapper: {
    marginBottom: 20,
  },
});

export default SignInScreen;
