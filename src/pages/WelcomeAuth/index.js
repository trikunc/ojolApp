import React from 'react';
import {View, Text, Image} from 'react-native';

import ActionButton from './ActionButton';
import {colors} from '../../utils/colors';
import {welcomeAuth} from '../../assets';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = (screen) => {
    navigation.navigate(screen);
  };
  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.text.welcome}>Selamat Datang di O-JOL</Text>
      <ActionButton
        desc="Silahkan pilih Login jika anda telah memiliki akun"
        title="Login"
        onPress1={() => handleGoTo('Login')}
      />
      <ActionButton
        desc="atau silahkan Register jika belum memiliki akun"
        title="Register"
        onPress1={() => handleGoTo('Register')}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
      flex: 1,
    },
    illustration: {
      width: 176.61,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};

export default WelcomeAuth;
