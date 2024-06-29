import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function GoogleIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 31 30" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.5001 15.3409C30.5001 14.2773 30.4027 13.2545 30.2218 12.2727H15.8062V18.075H24.0437C23.6889 19.95 22.6105 21.5386 20.9894 22.6023V26.3659H25.9361C28.8303 23.7546 30.5001 19.9091 30.5001 15.3409Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.8056 30.0001C19.9382 30.0001 23.403 28.657 25.9354 26.366L20.9888 22.6024C19.6182 23.5024 17.8649 24.0342 15.8056 24.0342C11.819 24.0342 8.4447 21.3956 7.24108 17.8501H2.12744V21.7365C4.646 26.6388 9.82226 30.0001 15.8056 30.0001Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M7.24166 17.8501C6.93553 16.9501 6.7616 15.9887 6.7616 15.0001C6.7616 14.0114 6.93553 13.0501 7.24166 12.1501V8.26367H2.12802C1.09137 10.2887 0.5 12.5796 0.5 15.0001C0.5 17.4205 1.09137 19.7114 2.12802 21.7365L7.24166 17.8501Z"
          fill={color}
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M15.8055 5.96593C18.0527 5.96593 20.0704 6.72275 21.6566 8.20912L26.0467 3.90683C23.396 1.48637 19.9312 0 15.8055 0C9.82221 0 4.64595 3.36138 2.1274 8.26367L7.24104 12.15C8.44466 8.60458 11.819 5.96593 15.8055 5.96593Z"
          fill={color}
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
