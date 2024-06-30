import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function NotiIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 25 24" fill="none">
        <Path
          d="M6.32474 13.934L5.59976 13.2452L6.32474 13.934ZM8.5 9C8.5 6.79086 10.2909 5 12.5 5V3C9.18629 3 6.5 5.68629 6.5 9H8.5ZM8.5 11.7564V9H6.5V11.7564H8.5ZM6.5 16C6.5 15.4658 6.70812 14.9823 7.04971 14.6228L5.59976 13.2452C4.91915 13.9616 4.5 14.9329 4.5 16H6.5ZM7.5 16H6.5V18H7.5V16ZM17.5 16H7.5V18H17.5V16ZM18.5 16H17.5V18H18.5V16ZM17.9503 14.6228C18.2919 14.9823 18.5 15.4658 18.5 16H20.5C20.5 14.9329 20.0809 13.9616 19.4002 13.2452L17.9503 14.6228ZM16.5 9V11.7564H18.5V9H16.5ZM12.5 5C14.7091 5 16.5 6.79086 16.5 9H18.5C18.5 5.68629 15.8137 3 12.5 3V5ZM19.4002 13.2452C18.7923 12.6054 18.5 12.1579 18.5 11.7564H16.5C16.5 13.05 17.3905 14.0336 17.9503 14.6228L19.4002 13.2452ZM4.5 16C4.5 17.1046 5.39543 18 6.5 18V16H4.5ZM18.5 18C19.6046 18 20.5 17.1046 20.5 16H18.5V18ZM6.5 11.7564C6.5 12.1579 6.20766 12.6054 5.59976 13.2452L7.04971 14.6228C7.60947 14.0336 8.5 13.05 8.5 11.7564H6.5Z"
          fill={color}
        />
        <Path
          d="M14.2976 19.8767C14.1312 20.2179 13.8712 20.5046 13.548 20.7035C13.2247 20.9023 12.8516 21.0051 12.4721 20.9998C12.0926 20.9945 11.7224 20.8813 11.4049 20.6735C11.0873 20.4657 10.8354 20.1718 10.6786 19.8262"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M12.5 3V4"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({});
