import React, {useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

import styles from './styles';

import CheckBoxComponent from '../../../components/checkbox';
import CheckboxOutput from '../../../components/checkboxOutput';
import RadioComponent from '../../../components/radioComponent';

const CheckboxScreen = () => {
  const [output, setOutput] = useState([]);

  return (
    <SafeAreaView style={styles.mainView}>
      <CheckBoxComponent setOutput={setOutput} output={output} />

      <RadioComponent />

      <CheckboxOutput output={output} />
    </SafeAreaView>
  );
};
export default CheckboxScreen;
