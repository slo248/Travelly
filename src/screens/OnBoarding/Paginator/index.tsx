import { StyleSheet, View, useWindowDimensions } from 'react-native';
import React from 'react';
import Bar from './Bar';
import { SharedValue } from 'react-native-reanimated';

interface PaginatorProps {
  count: number;
  scrollX: SharedValue<number>;
}

const Paginator: React.FC<PaginatorProps> = ({ count, scrollX }) => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      {Array.from(Array(count).keys()).map((index) => (
        <Bar key={index} index={index} width={width} scrollX={scrollX} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    columnGap: 5
  }
});

export default Paginator;
