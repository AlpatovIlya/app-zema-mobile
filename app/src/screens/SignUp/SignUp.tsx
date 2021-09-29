import React, {FC, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {yupResolver} from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {Controller, useForm} from 'react-hook-form';

import {LinearButton} from '../../components';
import {InputField, InputPhoneField} from '../../includes/InputField';
import {rootStyles} from '../../styles';
import {mainTheme} from '../../themes';
import {accountStore} from '../../store';
import {useNavigation} from '@react-navigation/core';
import {ScreenNames} from '../../constants';

const schema = yup.object({
  name: yup.string().required('Это обязательное поле'),
  email: yup
    .string()
    .email('Невалидная почта')
    .required('Это обязательное поле'),
  phone: yup
    .string()
    .min(18, input => `Номер телефона состоит из ${input.min} сиомволов`)
    .required('Это обязательное поле'),
  password: yup
    .string()
    .min(8, input => `Минимум ${input.min} символов`)
    .required('Это обязательное поле'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
    .required('Это обязательное поле'),
});

const SignUp: FC = () => {
  const navigation = useNavigation<any>();
  const inputPhone = useRef(null);
  const {
    handleSubmit,
    control,
    formState: {errors},
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (values: any) => {
    const phone = '+' + inputPhone?.current?.getRawValue();
    accountStore.login(phone, values.password);
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <Text style={[styles.title, rootStyles.title]}>Регистрация</Text>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <InputField
              wrapperStyle={styles.inputWrapper}
              label="Имя"
              placeholder={'Иван'}
              onChangeText={val => onChange(val.trim())}
              value={value}
              currentRef={inputPhone}
              error={errors.name?.message}
            />
          )}
          name="name"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <InputPhoneField
              wrapperStyle={styles.inputWrapper}
              label="Телефон"
              placeholder={'+7 (000) 000-00-00'}
              onChangeText={onChange}
              value={value}
              currentRef={inputPhone}
              error={errors.phone?.message}
            />
          )}
          name="phone"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <InputField
              wrapperStyle={styles.inputWrapper}
              label="E-mail"
              placeholder={'qwerty@yandex.ry'}
              onChangeText={onChange}
              value={value}
              currentRef={inputPhone}
              error={errors.email?.message}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <InputField
              wrapperStyle={styles.inputWrapper}
              label="Пароль"
              placeholder={'********'}
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              error={errors.password?.message}
            />
          )}
          name="password"
        />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({field: {onChange, value}}) => (
            <InputField
              wrapperStyle={styles.inputWrapper}
              label="Повтор пароля"
              placeholder={'********'}
              secureTextEntry={true}
              onChangeText={onChange}
              value={value}
              error={errors.confirmPassword?.message}
            />
          )}
          name="confirmPassword"
        />

        <LinearButton
          onPress={handleSubmit(onSubmit)}
          wrapperStyle={styles.submit}>
          Зарегистрироваться
        </LinearButton>
        <Text style={[styles.bottomText, rootStyles.text]}>
          Уже есть аккаунт ?{' '}
          <Text
            style={rootStyles.link}
            onPress={() =>
              navigation.navigate(ScreenNames.AuthScreenNames.SIGN_IN)
            }>
            Войти
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  form: {
    marginTop: 70,
    borderRadius: 13,
    marginHorizontal: mainTheme.paddingHorizontal,
    backgroundColor: mainTheme.color.card,
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  title: {
    textAlign: 'center',
    marginBottom: 25,
  },
  inputWrapper: {
    marginBottom: 15,
  },
  submit: {
    marginTop: 10,
    marginBottom: 15,
  },
  bottomText: {
    textAlign: 'center',
  },
});

export default SignUp;
