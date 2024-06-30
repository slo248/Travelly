import React from 'react';
import { FlatList, StyleSheet, Text, View, ViewStyle } from 'react-native';

interface Props<T> {
  data: T[];
  renderItem: (info: { item: T; index: number }) => JSX.Element;
  col?: number;
  style?: ViewStyle;
}

function GridView<T>({ data, renderItem, col = 2, style }: Props<T>) {
  return (
    <View style={[styles.container, style]}>
      {data.map((item, index) => (
        <View
          key={index}
          style={{
            width: `${100 / col}%`
          }}
        >
          {renderItem({ item, index })}
        </View>
      ))}
    </View>
  );
}

export default GridView;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
});
