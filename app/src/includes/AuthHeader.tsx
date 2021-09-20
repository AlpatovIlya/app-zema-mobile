import React, {FC, useContext} from 'react';
import {Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logoImage} from '../assets';
import {ThemeContext} from '../context';

const AuthHeader: FC = () => {
  const theme = useContext(ThemeContext);
  return (
    <SafeAreaView
      style={[
        styles.wrapper,
        {
          borderColor: theme.colors.gray,
          backgroundColor: theme.colors.card,
        },
      ]}
      edges={['top']}>
      <Image style={styles.logo} source={logoImage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    zIndex: 1,
    borderRadius: 10,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
  },
  logo: {
    width: 85,
    height: 85,
    alignSelf: 'center',
    marginBottom: -42,
  },
});

export default AuthHeader;
