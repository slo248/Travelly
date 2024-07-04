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
import MyText from '~/components/MyText';

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
    const t1 = getNameCountry(getValues('locationFrom'));
    const t2 = getNameCountry(getValues('locationTo'));

    const arr = Locations.map((location) => getNameCountry(location));

    const from = arr.reduce((acc, location, index) => {
      if (location === t1) {
        return index;
      }
      return acc;
    }, 0);
    const to = arr.reduce((acc, location, index) => {
      if (location === t2) {
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
        data={Locations}
        name="locationFrom"
        title="From"
        setIndex={state.from}
        defaultValueByIndex={0}
        renderItem={({ item }) => {
          // console.log(JSON.stringify(item));
          return (
            <MyText style={globalStyles.textForm}>
              {getNameCountry(item)}
            </MyText>
          );
        }}
      />
      <FormSelectController
        control={control}
        data={Locations}
        name="locationTo"
        title="To"
        setIndex={state.to}
        defaultValueByIndex={1}
        renderItem={({ item }) => {
          // console.log(JSON.stringify(item));
          return (
            <MyText style={globalStyles.textForm}>
              {getNameCountry(item)}
            </MyText>
          );
        }}
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
