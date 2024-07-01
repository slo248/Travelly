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
  PathValue
} from 'react-hook-form';
import { Texts } from '~/styles/texts';
import { rH, rMS, rW } from '~/styles/responsive';
import { Colors } from '~/styles/colors';

interface FormRadioControllerProps<FV extends FieldValues, DataType> {
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
  control: Control<FV>;
  errors?: FieldErrors<FV>;
  name: keyof FV & string;
  defaultValue?: DataType;
  horizontal?: boolean;
}

const FormRadioController = <FV extends FieldValues, DataType>({
  data,
  renderItem,
  control,
  errors,
  name,
  defaultValue,
  horizontal = false
}: FormRadioControllerProps<FV, DataType>) => {
  return (
    <>
      <Controller
        {...{
          control,
          name: name as Path<FV>,
          defaultValue: defaultValue as PathValue<FV, Path<FV>> | undefined
        }}
        render={({ field: { onChange, value } }) => (
          <ScrollView horizontal={horizontal}>
            {data.map((item, index) =>
              renderItem({
                item,
                index,
                state: JSON.stringify(value) === JSON.stringify(item),
                onChange,
                style: {
                  flex: 1,
                  marginRight: index < data.length - 1 ? 16 : 0
                }
              })
            )}
          </ScrollView>
        )}
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{String(errors[name]?.message)}</Text>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    ...Texts.error,
    position: 'absolute',
    marginTop: rMS(4),
    bottom: rH(-20)
  }
});

export default FormRadioController;
