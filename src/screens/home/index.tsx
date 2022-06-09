import React from 'react';
import {StyleSheet, Text} from 'react-native';
import WView from '../../components/WView';

const Home = () => {
  return (
    <WView style={styles.container}>
      <Text>This is Home Screen</Text>
    </WView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
