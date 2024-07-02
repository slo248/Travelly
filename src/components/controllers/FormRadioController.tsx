import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  FlexStyle,
  ViewStyle
} from 'react-native'; // Corrected imports
import { FC } from 'react';
import {
  Control,
  Controller,
  FieldErrors,
  FieldValues,
  Path,
  PathValue,
  useController
} from 'react-hook-form';
import { Texts } from '~/styles/texts';
import { rH, rMS, rW } from '~/styles/responsive';
import { Colors } from '~/styles/colors';

interface FormRadioControllerProps<FV extends FieldValues, DataType> {
  control: Control<FV>;
  data: DataType[];
  renderItem: ({
    item,
    index,
    state,
    onChange,
    style
  }: {
    item: DataType;
    index: number;
    state: boolean;
    onChange: (...event: any[]) => void;
    style: ViewStyle;
  }) => JSX.Element;
  name: keyof FV & string;
  defaultValue?: DataType;
  horizontal?: boolean;
}

const FormRadioController = <FV extends FieldValues, DataType>({
  control,
  data,
  renderItem,
  name,
  defaultValue,
  horizontal = false
}: FormRadioControllerProps<FV, DataType>) => {
  const {
    formState: { errors },
    field: { value, onChange }
  } = useController({
    control,
    name: name as Path<FV>,
    defaultValue: defaultValue as PathValue<FV, Path<FV>>
  });
  return (
    <View>
      <ScrollView horizontal={horizontal}>
        {data.map((item, index) =>
          renderItem({
            item,
            index,
            state: value === item,
            onChange,
            style: {
              flex: 1,
              marginRight: index < data.length - 1 ? 16 : 0
            }
          })
        )}
      </ScrollView>
      {errors && errors[name] && (
        <Text style={styles.error}>{String(errors[name]?.message)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    ...Texts.error
  }
});

export default FormRadioController;
