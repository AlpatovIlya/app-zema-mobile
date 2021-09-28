import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {logoImage} from '../../../assets';
import {mainTheme} from '../../../themes';

const AuthHeader = () => {
  return (
    <SafeAreaView style={styles.wrapper} edges={['top']}>
      <Image style={styles.logo} source={logoImage} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    zIndex: 1,
    backgroundColor: mainTheme.color.card,
    borderColor: mainTheme.color.line,
    borderWidth: 2,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  logo: {
    alignSelf: 'center',
    width: 85,
    height: 85,
    marginBottom: -40,
  },
});

export default AuthHeader;
