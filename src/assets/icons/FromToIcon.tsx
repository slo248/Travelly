import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function FromToIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <Svg viewBox="0 0 130 24" fill="none">
      <Circle cx="1.5" cy="11.8877" r="1.5" fill={color} />
      <Line
        x1="5"
        y1="11.6377"
        x2="125"
        y2="11.6377"
        stroke={color}
        strokeWidth="0.5"
        strokeDasharray="5 5"
      />
      <Path
        d="M130 11.8877C130 12.7161 129.328 13.3877 128.5 13.3877C127.672 13.3877 127 12.7161 127 11.8877C127 11.0593 127.672 10.3877 128.5 10.3877C129.328 10.3877 130 11.0593 130 11.8877ZM127.75 11.8877C127.75 12.3019 128.086 12.6377 128.5 12.6377C128.914 12.6377 129.25 12.3019 129.25 11.8877C129.25 11.4735 128.914 11.1377 128.5 11.1377C128.086 11.1377 127.75 11.4735 127.75 11.8877Z"
        fill={color}
      />
      <Path
        d="M69.1392 11.2107L73.031 11.2132C73.806 11.2136 75.3572 11.4347 75.3566 12.3162C75.356 13.1976 73.805 13.4151 73.0295 13.4137L69.1366 13.41L63.2371 20.896C63.13 21.0309 62.9677 21.1106 62.7936 21.1105L62.048 21.1098C61.6528 21.1094 61.3802 20.7146 61.5216 20.346L64.1758 13.4053L61.4191 13.4027L59.01 15.8041C58.9041 15.9096 58.7617 15.9694 58.6112 15.9692L58.2066 15.9689C57.8079 15.9697 57.5353 15.5655 57.6838 15.1969L58.6811 12.301L57.6875 9.40325C57.5396 9.03439 57.8115 8.63189 58.2114 8.63227L58.6148 8.63148C58.7642 8.6328 58.9076 8.69165 59.0134 8.79743L61.4193 11.2034L64.1761 11.206L61.532 4.26142C61.3911 3.89258 61.6642 3.49829 62.0594 3.49867L62.805 3.49937C62.9779 3.49836 63.1414 3.57954 63.2483 3.71468L69.1392 11.2107Z"
        fill={color}
      />
    </Svg>
  );
}

const styles = StyleSheet.create({});