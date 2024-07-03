import { FC } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FeatureNotImplemented } from '~/constants';
import FormInputController from '../controllers/FormInputController';
import { FormProvider, useForm } from 'react-hook-form';
import { SearchFieldValues } from '~/types/SearchFieldValues';
import { rH, rMS, rW } from '~/styles/responsive';
import ButtonIcon from '../Button/ButtonIcon';
import SearchIcon from '~/assets/icons/SearchIcon';
import { Fonts } from '~/styles/fonts';
import { Colors } from '~/styles/colors';

export interface SearchBoxProps {
  onSearch?: (text: SearchFieldValues) => void;
}

const SearchBox: FC<SearchBoxProps> = ({
  onSearch = (text: SearchFieldValues) => Alert.alert(FeatureNotImplemented)
}) => {
  const { control, handleSubmit } = useForm<SearchFieldValues>();
  return (
    <View style={styles.container}>
      <FormInputController
        control={control}
        name="search"
        placeholder="Search"
        textInputProps={{
          style: {
            fontSize: rMS(14),
            fontFamily: Fonts.regular,
            color: Colors.tertiary
          }
        }}
      />
      <View style={styles.button}>
        <ButtonIcon
          borderRadius={13}
          Icon={SearchIcon}
          onPress={handleSubmit(onSearch)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: rH(40),
    backgroundColor: Colors.white,
    borderRadius: 15,
    paddingHorizontal: rW(16),
    justifyContent: 'center'
  },
  button: {
    position: 'absolute',
    height: '100%',
    right: 0
  }
});

export default SearchBox;
