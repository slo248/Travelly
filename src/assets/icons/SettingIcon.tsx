import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Svg, { Circle, Path } from 'react-native-svg';
import { Colors } from '~/styles/colors';
import { SvgProps } from '~/types/SvgProps';

export default function SettingIcon({ color = Colors.secondary }: SvgProps) {
  return (
    <View style={{ aspectRatio: 1 }}>
      <Svg viewBox="0 0 24 24" fill="none">
        <Path
          d="M14 5.28988H13C13 5.7323 13.2907 6.12213 13.7147 6.24833L14 5.28988ZM15.3302 5.84137L14.8537 6.72058C15.2429 6.93144 15.7243 6.86143 16.0373 6.54847L15.3302 5.84137ZM16.2426 4.92891L15.5355 4.2218V4.2218L16.2426 4.92891ZM17.6568 4.92891L16.9497 5.63601L16.9497 5.63602L17.6568 4.92891ZM19.071 6.34312L19.7782 5.63602V5.63602L19.071 6.34312ZM19.071 7.75734L18.3639 7.05023L19.071 7.75734ZM18.1586 8.66978L17.4515 7.96268C17.1385 8.27563 17.0685 8.75709 17.2794 9.14621L18.1586 8.66978ZM18.7101 10L17.7517 10.2853C17.8779 10.7093 18.2677 11 18.7101 11V10ZM18.7101 14V13C18.2677 13 17.8779 13.2907 17.7517 13.7148L18.7101 14ZM18.1586 15.3302L17.2794 14.8538C17.0685 15.2429 17.1385 15.7244 17.4515 16.0373L18.1586 15.3302ZM19.071 16.2427L19.7782 15.5356V15.5356L19.071 16.2427ZM19.071 17.6569L18.3639 16.9498L18.3639 16.9498L19.071 17.6569ZM17.6568 19.0711L18.3639 19.7782V19.7782L17.6568 19.0711ZM15.3302 18.1586L16.0373 17.4515C15.7243 17.1386 15.2429 17.0686 14.8537 17.2794L15.3302 18.1586ZM14 18.7101L13.7147 17.7517C13.2907 17.8779 13 18.2677 13 18.7101H14ZM9.99998 18.7101H11C11 18.2677 10.7093 17.8779 10.2852 17.7517L9.99998 18.7101ZM8.66977 18.1586L9.1462 17.2794C8.75707 17.0685 8.27562 17.1385 7.96266 17.4515L8.66977 18.1586ZM7.75733 19.071L7.05023 18.3639L7.75733 19.071ZM6.34312 19.071L5.63601 19.7782H5.63601L6.34312 19.071ZM4.92891 17.6568L4.2218 18.3639H4.2218L4.92891 17.6568ZM4.92891 16.2426L5.63601 16.9497H5.63601L4.92891 16.2426ZM5.84135 15.3302L6.54846 16.0373C6.86141 15.7243 6.93142 15.2429 6.72057 14.8537L5.84135 15.3302ZM5.28986 14L6.24832 13.7147C6.12212 13.2907 5.73228 13 5.28986 13V14ZM5.28986 10V11C5.73228 11 6.12212 10.7093 6.24832 10.2852L5.28986 10ZM5.84135 8.66982L6.72057 9.14625C6.93143 8.75712 6.86142 8.27567 6.54846 7.96272L5.84135 8.66982ZM6.34312 4.92895L7.05023 5.63606L7.05023 5.63606L6.34312 4.92895ZM8.66977 5.84139L7.96267 6.54849C8.27562 6.86145 8.75707 6.93146 9.1462 6.7206L8.66977 5.84139ZM9.99998 5.28988L10.2852 6.24833C10.7093 6.12213 11 5.7323 11 5.28988H9.99998ZM11 2C9.89541 2 8.99998 2.89543 8.99998 4H11V4V2ZM13 2H11V4H13V2ZM15 4C15 2.89543 14.1046 2 13 2V4H15ZM15 5.28988V4H13V5.28988H15ZM15.8066 4.96215C15.3271 4.70233 14.8179 4.48994 14.2852 4.33143L13.7147 6.24833C14.1132 6.36691 14.4944 6.52587 14.8537 6.72058L15.8066 4.96215ZM15.5355 4.2218L14.6231 5.13426L16.0373 6.54847L16.9497 5.63602L15.5355 4.2218ZM18.3639 4.2218C17.5829 3.44075 16.3166 3.44075 15.5355 4.2218L16.9497 5.63602V5.63601L18.3639 4.2218ZM19.7782 5.63602L18.3639 4.2218L16.9497 5.63602L18.3639 7.05023L19.7782 5.63602ZM19.7782 8.46444C20.5592 7.68339 20.5592 6.41706 19.7782 5.63602L18.3639 7.05023L18.3639 7.05023L19.7782 8.46444ZM18.8657 9.37689L19.7782 8.46444L18.3639 7.05023L17.4515 7.96268L18.8657 9.37689ZM19.6686 9.71475C19.51 9.18211 19.2976 8.67285 19.0378 8.19335L17.2794 9.14621C17.4741 9.50555 17.6331 9.8868 17.7517 10.2853L19.6686 9.71475ZM18.7101 11H20V9H18.7101V11ZM20 11H22C22 9.89543 21.1045 9 20 9V11ZM20 11V13H22V11H20ZM20 13V15C21.1045 15 22 14.1046 22 13H20ZM20 13H18.7101V15H20V13ZM19.0378 15.8066C19.2976 15.3271 19.51 14.8179 19.6686 14.2852L17.7517 13.7148C17.6331 14.1132 17.4741 14.4944 17.2794 14.8538L19.0378 15.8066ZM19.7782 15.5356L18.8657 14.6231L17.4515 16.0373L18.3639 16.9498L19.7782 15.5356ZM19.7782 18.364C20.5592 17.5829 20.5592 16.3166 19.7782 15.5356L18.3639 16.9498H18.3639L19.7782 18.364ZM18.3639 19.7782L19.7782 18.364L18.3639 16.9498L16.9497 18.364L18.3639 19.7782ZM15.5355 19.7782C16.3166 20.5592 17.5829 20.5592 18.3639 19.7782L16.9497 18.364L15.5355 19.7782ZM14.6231 18.8657L15.5355 19.7782L16.9497 18.364L16.0373 17.4515L14.6231 18.8657ZM14.2852 19.6686C14.8179 19.5101 15.3271 19.2977 15.8066 19.0378L14.8537 17.2794C14.4944 17.4741 14.1132 17.6331 13.7147 17.7517L14.2852 19.6686ZM15 20V18.7101H13V20H15ZM13 22C14.1046 22 15 21.1046 15 20H13V22ZM11 22H13V20H11V22ZM8.99998 20C8.99998 21.1046 9.89541 22 11 22V20H8.99998ZM8.99998 18.7101V20H11V18.7101H8.99998ZM8.19334 19.0378C8.67284 19.2977 9.1821 19.5101 9.71473 19.6686L10.2852 17.7517C9.88678 17.6331 9.50554 17.4741 9.1462 17.2794L8.19334 19.0378ZM8.46444 19.7782L9.37687 18.8657L7.96266 17.4515L7.05023 18.3639L8.46444 19.7782ZM5.63601 19.7782C6.41706 20.5592 7.68339 20.5592 8.46444 19.7782L7.05023 18.3639L7.05023 18.3639L5.63601 19.7782ZM4.2218 18.3639L5.63601 19.7782L7.05023 18.3639L5.63601 16.9497L4.2218 18.3639ZM4.2218 15.5355C3.44075 16.3166 3.44075 17.5829 4.2218 18.3639L5.63601 16.9497L5.63601 16.9497L4.2218 15.5355ZM5.13424 14.6231L4.2218 15.5355L5.63601 16.9497L6.54846 16.0373L5.13424 14.6231ZM4.33141 14.2852C4.48993 14.8179 4.70231 15.3271 4.96214 15.8066L6.72057 14.8537C6.52586 14.4944 6.3669 14.1132 6.24832 13.7147L4.33141 14.2852ZM5.28986 13H3.99997V15H5.28986V13ZM3.99997 13H3.99997H1.99997C1.99997 14.1046 2.8954 15 3.99997 15V13ZM3.99997 13V11H1.99997V13H3.99997ZM3.99997 11V9C2.8954 9 1.99997 9.89543 1.99997 11H3.99997ZM3.99997 11H5.28986V9H3.99997V11ZM4.96214 8.1934C4.70232 8.67288 4.48993 9.18213 4.33141 9.71475L6.24832 10.2852C6.3669 9.88681 6.52586 9.50558 6.72057 9.14625L4.96214 8.1934ZM4.2218 8.46449L5.13425 9.37693L6.54846 7.96272L5.63602 7.05027L4.2218 8.46449ZM4.2218 5.63606C3.44075 6.41711 3.44076 7.68344 4.2218 8.46449L5.63602 7.05027L4.2218 5.63606ZM5.63602 4.22185L4.2218 5.63606L5.63602 7.05027L7.05023 5.63606L5.63602 4.22185ZM8.46444 4.22185C7.6834 3.4408 6.41707 3.4408 5.63602 4.22185L7.05023 5.63606V5.63606L8.46444 4.22185ZM9.37688 5.13428L8.46444 4.22185L7.05023 5.63606L7.96267 6.54849L9.37688 5.13428ZM9.71474 4.33143C9.1821 4.48995 8.67284 4.70234 8.19334 4.96218L9.1462 6.7206C9.50554 6.52588 9.88678 6.36692 10.2852 6.24833L9.71474 4.33143ZM8.99998 4V5.28988H11V4H8.99998Z"
          fill={color}
        />
        <Circle
          cx="12"
          cy="12"
          r="3"
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
