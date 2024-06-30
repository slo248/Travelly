import { FC } from 'react';
import { View, Text, Alert, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { FeatureNotImplemented } from '~/constants';
import FormInputController from '../controllers/FormInputController';
import { useForm } from 'react-hook-form';
import { SearchFieldValues } from '~/types/SearchFieldValues';

export interface SearchBoxProps {
  onSearch: (text: string) => void;
}

const SearchBox: FC<SearchBoxProps> = ({
  onSearch = () => Alert.alert(FeatureNotImplemented)
}) => {
  const { control, handleSubmit } = useForm<SearchFieldValues>();
  return (
    <View style={styles.container}>
      <FormInputController
        control={control}
        name="search"
        placeholder="Search"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SearchBox;
