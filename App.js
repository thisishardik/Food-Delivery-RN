import SearchScreen from "./src/screens/search_screen";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import ResultsShow from "./src/screens/results_show";

const navigator = createStackNavigator({
  Search: SearchScreen,
  Results: ResultsShow,

}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Food Delivery'
  }
});

export default createAppContainer(navigator);