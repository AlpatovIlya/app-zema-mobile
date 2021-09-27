import React, {FC, useContext, useState} from 'react';
import {Controller, SubmitHandler, useForm} from 'react-hook-form';
import {StyleSheet, Text, TextStyle, View, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {ThemeContext} from '../context';
import {GradientButton, InputField, PhoneInputField} from '../includes';
import {rootStyles} from '../styles';
import Icon, {Size} from '../components/Icon';

type SignInForm = {
  phone: string;
  password: string;
};
const schema = yup.object().shape({
  phone: yup
    .string()
    .max(18, pass => `Максимум ${pass.max} символов`)
    .required('Это обязательное поле'),
  password: yup
    .string()
    .min(8, pass => `Миниммум ${pass.min} символов`)
    .required('Это обязательное поле'),
});

const SignInScreen: FC = () => {
  const theme = useContext(ThemeContext);
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<SignInForm>({
    resolver: yupResolver<yup.AnyObjectSchema>(schema),
  });

  const onSubmit = (data: SubmitHandler<SignInForm>) => console.log(data);

  const titleStyle: TextStyle = {
    color: theme.colors.title,
  };
  const formStyle: ViewStyle = {
    borderColor: theme.colors.gray,
    backgroundColor: theme.colors.card,
    marginHorizontal: theme.paddingHorizontal * 3,
  };

  const helperStyle: TextStyle = {
    color: theme.colors.gray,
  };
  const mainLink: TextStyle = {
    color: theme.colors.main,
  };

  return (
    <SafeAreaView edges={['bottom']}>
      <Icon size={'Small'} />
      <View style={[styles.form, formStyle]}>
        <Text style={[rootStyles.title, styles.title, titleStyle]}>
          Вход в личный кабинет
        </Text>
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <PhoneInputField
              wrapperStyle={styles.inputWrapper}
              label="Телефон"
              value={value}
              onChangeText={onChange}
              error={errors.phone?.message}
            />
          )}
          name="phone"
          defaultValue=""
        />
        <Controller
          control={control}
          render={({field: {onChange, value}}) => (
            <InputField
              wrapperStyle={styles.inputWrapper}
              onChangeText={onChange}
              value={value}
              label={'Пароль'}
              placeholder="*******"
              secureTextEntry={true}
              error={errors.password?.message}
            />
          )}
          name="password"
          defaultValue=""
        />
        <GradientButton
          wrapperStyle={styles.submit}
          onPress={handleSubmit(onSubmit)}>
          Войти
        </GradientButton>
        <Text style={[helperStyle, rootStyles.helper, styles.helper]}>
          Забыли пароль?
        </Text>
        <Text style={[mainLink, rootStyles.link, styles.helper]}>
          Забыли пароль?
        </Text>
        <View
          style={[
            styles.line,
            {
              borderColor: theme.colors.gray,
            },
          ]}
        />
        <Text style={[helperStyle, rootStyles.helper, styles.helper]}>
          Еще нет аккаунта?
        </Text>
        <Text style={[mainLink, rootStyles.link, styles.helper]}>
          Зарегистрироваться
        </Text>
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
  submit: {
    marginBottom: 24,
  },
  helper: {
    textAlign: 'center',
    marginBottom: 5,
  },
  line: {
    borderWidth: 1,
    marginVertical: 15,
  },
});

export default SignInScreen;
('bem - b__e-m');
