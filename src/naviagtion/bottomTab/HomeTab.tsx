import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/home/index';

const Stack = createNativeStackNavigator();

function HomeTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        options={{headerShown: false}}
        component={Home}
      />
    </Stack.Navigator>
  );
}

export default HomeTab;
