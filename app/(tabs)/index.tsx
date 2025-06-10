import { StatusBar, StyleSheet } from 'react-native';
import { Text, View } from '@/components/Themed';
import HomeMap from '@/components/homeMap';
import CovidMessage from '@/components/covidMessage';
import HomeScreen from '@/components/homeSearch';
import DestinationSearch from './destinationSearch';
import Result from './result';

export default function TabOneScreen() {
  return (
    <View>
      <StatusBar barStyle="dark-content" backgroundColor='white'/>
      <HomeMap />
      <CovidMessage />
      <HomeScreen />
      {/* <DestinationSearch /> */}
      {/* <Result /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
