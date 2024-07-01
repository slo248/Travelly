import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity
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
import SelectDropdown from 'react-native-select-dropdown';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';

interface FormSelectControllerProps<FV extends FieldValues, DataType> {
  data: DataType[];
  control: Control<FV>;
  errors?: FieldErrors<FV>;
  name: keyof FV & string;
  defaultValue?: DataType;
  title: string;
}

const FormSelectController = <FV extends FieldValues, DataType>({
  data,
  control,
  errors,
  name,
  defaultValue,
  title
}: FormSelectControllerProps<FV, DataType>) => {
  return (
    <>
      <Controller
        {...{
          control,
          name: name as Path<FV>,
          defaultValue: defaultValue as PathValue<FV, Path<FV>> | undefined
        }}
        render={({ field: { onChange, value } }) => (
          <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => onChange(selectedItem)}
            renderButton={(selectedItem, isOpened) => (
              <View style={styles.button}>
                <Text style={styles.heading}>{title}</Text>
                <Text style={styles.item}>{selectedItem}</Text>
              </View>
            )}
            renderItem={(item, index, isSelected) => (
              <TouchableOpacity
                activeOpacity={0.5}
                style={{
                  ...styles.dropdownItem,
                  ...(isSelected && { backgroundColor: Colors.primary })
                }}
              >
                <Text
                  style={{
                    ...styles.item,
                    ...(isSelected && { color: Colors.white })
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
            dropdownStyle={styles.dropdown}
            disableAutoScroll
          />
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
  },
  button: {
    width: '100%',
    paddingHorizontal: rW(16),
    paddingTop: rH(4),
    paddingBottom: rH(8),
    backgroundColor: Colors.white,
    borderRadius: 15
  },
  heading: {
    fontSize: rMS(10),
    fontFamily: Fonts.regular,
    color: Colors.placeholder
  },
  item: {
    fontSize: rMS(16),
    fontFamily: Fonts.regular,
    color: Colors.tertiary
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
