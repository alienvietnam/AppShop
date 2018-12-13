import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './src/components/Main/Main';
import Authentication from './src/components/Authentication/Authentication';
import ChangeInfo from './src/components/ChangeInfo/ChangeInfo';
import OrderHistory from './src/components/OrderHistory/OrderHistory';
import Menu from './src/components/Main/Menu';
import Shop from './src/components/Main/Shop/Shop';

const AppNavigator = createStackNavigator({
  Main: { screen: Main },
  Authentication: { screen: Authentication },
  ChangeInfo: { screen: ChangeInfo },
  OrderHistory: { screen: OrderHistory },
  Menu: { screen: Menu },
  Shop: { screen: Shop },
});

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
