import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Input, Button} from '../../components';
import {colors} from '../../utils/colors';
import {IconBack, RegisterImage} from '../../assets';

const Register = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    console.log('data yg dikirim: ', form);
  };

  const onInputChange = (value, inputForm) => {
    setForm({
      ...form,
      [inputForm]: value,
    });
  };

  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} />
      <ScrollView
        style={{
          flexDirection: 'column',
          alignSelf: 'center',
        }}>
        <RegisterImage
          width={200}
          height={126.46}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Mohon mengisi beberapa data untuk mproses Regsiter anda
        </Text>
        <View style={styles.space(30)} />
        <Input
          placeholder="Full Name"
          value={form.fullName}
          onChangeText={(value) => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(5)} />
        <Input
          placeholder="Email"
          value={form.email}
          onChangeText={(value) => onInputChange(value, 'email')}
        />
        <View style={styles.space(5)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={(value) => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(40)} />
        <View
          style={{
            alignSelf: 'center',
            minWidth: 225,
          }}>
          <Button title="Register" onPress={sendData} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20, flexDirection: 'column'},
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
