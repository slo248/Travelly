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

interface FormMultipleControllerProps<FV extends FieldValues, DataType> {
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
  defaultValue?: DataType[];
  horizontal?: boolean;
}

const FormMultipleController = <FV extends FieldValues, DataType>({
  control,
  data,
  renderItem,
  name,
  defaultValue,
  horizontal = false
}: FormMultipleControllerProps<FV, DataType>) => {
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
        {data.map((item, index) => {
          const state = value.includes(item);
          return renderItem({
            item,
            index,
            state,
            onChange: () =>
              state
                ? onChange(value.filter((v) => v !== item))
                : onChange([...value, item]),
            style: {
              flex: 1,
              marginRight: horizontal
                ? index < data.length - 1
                  ? rW(16)
                  : 0
                : 0,
              marginTop: horizontal ? 0 : 0 < index ? rH(16) : 0
            }
          });
        })}
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

export default FormMultipleController;
