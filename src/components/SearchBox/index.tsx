import { FC } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FeatureNotImplemented } from '~/constants';
import FormInputController from '../controllers/FormInputController';
import { useForm } from 'react-hook-form';
import { SearchFieldValues } from '~/types/SearchFieldValues';
import { rH } from '~/styles/responsive';
import ButtonIcon from '../Button/ButtonIcon';
import SearchIcon from '~/assets/icons/SearchIcon';

export interface SearchBoxProps {
  onSearch?: (text: SearchFieldValues) => void;
}

const SearchBox: FC<SearchBoxProps> = ({
  onSearch = (text: SearchFieldValues) => Alert.alert(FeatureNotImplemented)
}) => {
  const { control, handleSubmit } = useForm<SearchFieldValues>();
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <FormInputController
          control={control}
          name="search"
          placeholder="Search"
        />
      </View>
      <View style={styles.button}>
        <ButtonIcon Icon={SearchIcon} onPress={handleSubmit(onSearch)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    height: '100%',
    right: 0
  }
});

export default SearchBox;
