import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ViewStyle
} from 'react-native'; // Corrected imports
import { FC, useLayoutEffect, useRef } from 'react';
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
import SelectDropdown from 'react-native-select-dropdown';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';
import { globalStyles } from '~/styles/globalStyles';

interface FormSelectControllerProps<FV extends FieldValues, DataType> {
  control: Control<FV>;
  data: DataType[];
  name: keyof FV & string;
  title: string;
  setIndex?: number;
  defaultValueByIndex: number;
  renderItem: ({ item }: { item: DataType }) => JSX.Element;
}

const FormSelectController = <FV extends FieldValues, DataType>({
  control,
  data,
  name,
  title,
  setIndex,
  defaultValueByIndex,
  renderItem: rI
}: FormSelectControllerProps<FV, DataType>) => {
  const {
    formState: { errors },
    field: { value, onChange }
  } = useController({
    control,
    name: name as Path<FV>,
    defaultValue: data[defaultValueByIndex] as PathValue<FV, Path<FV>>
  });

  const dropdownRef = useRef<SelectDropdown>(null);
  // console.log(errors);

  useLayoutEffect(() => {
    if (setIndex === undefined) return;
    // console.log(`${name} set index ${setIndex}`);
    dropdownRef.current?.selectIndex(setIndex);
    onChange(data[setIndex]);
  }, [setIndex]);

  return (
    <View>
      <SelectDropdown
        ref={dropdownRef}
        data={data}
        defaultValueByIndex={defaultValueByIndex}
        onSelect={(selectedItem, index) => onChange(selectedItem)}
        renderButton={(selectedItem, isOpened) => {
          // console.log(selectedItem);
          return (
            <View style={globalStyles.cardForm}>
              <Text style={globalStyles.headingForm}>{title}</Text>
              {rI({ item: selectedItem ?? value })}
            </View>
          );
        }}
        renderItem={(item, index, isSelected) => (
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              ...styles.dropdownItem
            }}
          >
            {rI({ item })}
          </TouchableOpacity>
        )}
        dropdownStyle={styles.dropdown}
        disableAutoScroll
      />
      {errors && errors[name] && (
        <Text style={styles.error}>{String(errors[name]?.message)}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  error: {
    ...Texts.error
  },
  dropdownItem: {
    paddingVertical: rH(8),
    paddingHorizontal: rW(16),
    borderColor: Colors.black,
    borderBottomWidth: 0.2
  },
  dropdown: {
    borderRadius: 15
  }
});

export default FormSelectController;
