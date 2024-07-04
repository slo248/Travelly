import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { ButtonText } from '~/components/Button';
import { rH, rW } from '~/styles/responsive';
import { useFormContext } from 'react-hook-form';

const Actions = () => {
  const { reset, getValues } = useFormContext();
  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <ButtonText
          title="Reset"
          reverseStyle
          borderRadius={20}
          onPress={reset}
        />
      </View>
      <View style={styles.button}>
        <ButtonText
          title="Done"
          borderRadius={20}
          onPress={() => console.log(getValues())}
        />
      </View>
    </View>
  );
};

export default Actions;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    columnGap: rW(16)
  },
  button: {
    flex: 1,
    height: rH(60)
  }
});
