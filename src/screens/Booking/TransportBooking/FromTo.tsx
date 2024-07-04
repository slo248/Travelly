import { StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState } from 'react';
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
  const [state, setState] = useState<{
    from: number | undefined;
    to: number | undefined;
  }>({
    from: undefined,
    to: undefined
  });

  const onSwitch = useCallback(() => {
    const from = data.reduce((acc, location, index) => {
      if (location === getValues('locationFrom')) {
        return index;
      }
      return acc;
    }, 0);
    const to = data.reduce((acc, location, index) => {
      if (location === getValues('locationTo')) {
        return index;
      }
      return acc;
    }, 0);
    setState({ from: to, to: from });
  }, []);

  // useEffect(() => {
  //   console.log(getValues(['locationFrom', 'locationTo']));
  // }, [state]);

  return (
    <View style={{ rowGap: rH(8), justifyContent: 'center' }}>
      <FormSelectController
        control={control}
        data={data}
        name="locationFrom"
        title="From"
        setIndex={state.from}
      />
      <FormSelectController
        control={control}
        data={data}
        name="locationTo"
        title="To"
        setIndex={state.to}
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
          onPress={() => {
            // console.log(getValues());
            // console.log('Switching from and to');
            // console.log(getValues(['locationFrom', 'locationTo']));
            onSwitch();
          }}
        />
      </View>
    </View>
  );
};

export default FromTo;
