import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import {colors} from '../../../utils/colors';

const Input = ({...rest}) => {
  return (
    <TextInput
      style={styles.input}
      // placeholder={placeholder}
      placeholderTextColor={colors.default}
      {...rest}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    borderColor: colors.default,
    borderRadius: 25,
    paddingVertical: 8,
    paddingHorizontal: 18,
    fontSize: 14,
    color: colors.default,
    width: 250,
  },
});
