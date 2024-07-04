import { FC, useEffect, useState } from 'react';
import { Control, FieldValues, Path, useController } from 'react-hook-form';
import { StyleSheet, TouchableOpacity, View, ViewProps } from 'react-native';
import { Colors } from '~/styles/colors';
import { rH, rW } from '~/styles/responsive';

interface CheckBoxProps {
  containerStyle?: ViewProps;
  textStyle?: ViewProps;
  onChange?: (value: boolean) => void;
  isLabel?: boolean;
  parentState?: boolean;
}

const CheckBox = ({
  containerStyle,
  isLabel,
  parentState = false,
  onChange = () => {}
}: CheckBoxProps) => {
  const [state, setState] = useState(parentState);

  useEffect(() => setState(!state), [isLabel]);

  useEffect(() => onChange(state), [state]);

  useEffect(() => setState(parentState), [parentState]);

  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...containerStyle
      }}
      onPress={() => setState(!state)}
    >
      <View
        style={{
          ...styles.content,
          backgroundColor: state ? Colors.primary : 'transparent'
        }}
      />
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    width: rW(20),
    height: rH(20),
    borderRadius: rW(20) / 2,
    borderWidth: 1,
    borderColor: Colors.primary,
    padding: 2,
    overflow: 'hidden'
  },
  content: {
    flex: 1,
    borderRadius: rW(20) / 2
  }
});
