import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { globalStyles } from '~/styles/globalStyles';
import { useFormContext } from 'react-hook-form';
import FormSelectController from '~/components/controllers/FormSelectController';
import { Locations } from '~/data/transports';
import { getNameCountry } from '~/utils';
import { rH, rW } from '~/styles/responsive';
import { ButtonIcon } from '~/components/Button';
import SwitchIcon from '~/assets/icons/SwitchIcon';

const data = Locations.map((location) => getNameCountry(location));

const FromTo = () => {
  const { control, getValues } = useFormContext();

  return (
    <View style={{ rowGap: rH(8), justifyContent: 'center' }}>
      <FormSelectController
        control={control}
        data={data}
        name="locationFrom"
        title="From"
      />
      <FormSelectController
        control={control}
        data={data}
        name="locationTo"
        title="To"
      />
      <View
        style={{
          position: 'absolute',
          width: rW(40),
          height: rH(40),
          right: rW(40)
        }}
      >
        <ButtonIcon
          Icon={SwitchIcon}
          borderRadius={12}
          padding={8}
          onPress={() => console.log(getValues())}
        />
      </View>
    </View>
  );
};

export default FromTo;
