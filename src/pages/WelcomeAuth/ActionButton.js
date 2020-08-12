import React from 'react';
import {View, Text} from 'react-native';
// import {colors} from '../../utils/colors';
import {Button} from '../../components/atoms';
import {colors} from '../../utils/colors';

const ActionButton = ({desc, title, onPress1}) => {
  return (
    <View style={styles.wrapper.component}>
      <Text style={styles.text.desc}>{desc}</Text>
      <Button title={title} onPress={onPress1} />
    </View>
  );
};

const styles = {
  wrapper: {
    component: {
      marginBottom: 43,
      maxWidth: 225,
    },
  },
  text: {
    desc: {
      fontSize: 10,
      color: colors.text.deault,
      textAlign: 'center',
      paddingHorizontal: '15%',
      marginBottom: 6,
    },
  },
};

export default ActionButton;
