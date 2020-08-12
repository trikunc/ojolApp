import React from 'react';
import {View, Text} from 'react-native';
import {Input} from '../../components';
import {colors} from '../../utils/colors';
import {IconBack, RegisterImage} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} />
      <View style={{alignItems: 'center'}}>
        {/* <View style={styles.illustration} /> */}
        <RegisterImage
          width={200}
          height={126.46}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk mproses Regsiter anda
        </Text>
        <View style={styles.space(30)} />
        <Input placeholder="Full Name" />
        <View style={styles.space(5)} />
        <Input placeholder="Email" />
        <View style={styles.space(5)} />
        <Input placeholder="Password" />
      </View>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 30},
  },
  illustration: {
    marginTop: 12,
  },
  text: {
    desc: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 30,
      maxWidth: 250,
      textAlign: 'center',
    },
  },
  space: (value) => {
    return {height: value};
  },
};

export default Register;
