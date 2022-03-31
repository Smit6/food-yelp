import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import BusinessShowScreen from "./src/screens/BusinessShowScreen";
import SearchScreen from "./src/screens/SearchScreen";

const navigator = createStackNavigator({
    Search: SearchScreen,
    BusinessShow: BusinessShowScreen,
}, {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
        title: 'Business Search'
    }
});

export default createAppContainer(navigator);
