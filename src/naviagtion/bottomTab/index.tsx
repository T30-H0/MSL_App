import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Cart from '../../screens/cart/index';
import Chat from '../../screens/chat/index';
import Home from '../../screens/home';
import More from '../../screens/more/index';

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Settings" component={Chat} />
      <Tab.Screen name="Settings" component={Cart} />
      <Tab.Screen name="Settings" component={More} />
    </Tab.Navigator>
  );
}
export default BottomTab;
