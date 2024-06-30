import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Colors } from '~/styles/colors';

export interface CardProps {
  TopFC: React.FC<any>;
  BottomFC: React.FC<any>;
}

const Card: FC<CardProps> = ({ TopFC, BottomFC }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.comp, styles.topComp]}>
        <TopFC />
      </View>
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <View style={[styles.ball, styles.ball1]} />
        <View style={[styles.ball, styles.ball2]} />
      </View>
      <View style={[styles.comp, styles.bottomComp]}>
        <BottomFC />
      </View>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: Colors.white,
    borderRadius: 20
  },
  comp: {
    padding: 16
  },
  topComp: {},
  bottomComp: {},
  divider: {
    height: 1,
    borderStyle: 'dashed',
    borderColor: Colors.tertiary,
    borderWidth: 1
  },
  ball: {
    position: 'absolute',
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: Colors.background
  },
  dividerContainer: {
    justifyContent: 'center'
  },
  ball1: {
    left: -12
  },
  ball2: {
    right: -12
  }
});
