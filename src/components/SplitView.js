import * as React from 'react';
import {View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {flex: 1, flexDirection: 'row'},
  masterView: {flex: 1, maxWidth: 400, borderWidth: 1, borderColor: 'red'},
  detailView: {
    flex: 1,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'blue',
  },
});

const SplitView = ({master, detail}) => (
  <View style={styles.root}>
    <View style={styles.masterView}>{master}</View>
    <View style={styles.detailView}>{detail}</View>
  </View>
);

export default SplitView;
