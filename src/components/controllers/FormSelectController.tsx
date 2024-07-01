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
import { globalStyles } from '~/styles/globalStyles';

interface FormSelectControllerProps<FV extends FieldValues, DataType> {
  data: DataType[];
  control: Control<FV>;
  errors?: FieldErrors<FV>;
  name: keyof FV & string;
  title: string;
}

const FormSelectController = <FV extends FieldValues, DataType>({
  data,
  control,
  errors,
  name,
  title
}: FormSelectControllerProps<FV, DataType>) => {
  return (
    <>
      <Controller
        {...{
          control,
          name: name as Path<FV>
        }}
        render={({ field: { onChange, value } }) => (
          <SelectDropdown
            data={data}
            onSelect={(selectedItem, index) => onChange(selectedItem)}
            renderButton={(selectedItem, isOpened) => (
              <View style={globalStyles.cardForm}>
                <Text style={globalStyles.headingForm}>{title}</Text>
                <Text style={globalStyles.textForm}>{selectedItem}</Text>
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
                    ...globalStyles.textForm,
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
