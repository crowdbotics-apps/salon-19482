import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import ArticleList89442Navigator from '../features/ArticleList89442/navigator';
import ArticleList89441Navigator from '../features/ArticleList89441/navigator';
import ArticleList89440Navigator from '../features/ArticleList89440/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
ArticleList89442: { screen: ArticleList89442Navigator },
ArticleList89441: { screen: ArticleList89441Navigator },
ArticleList89440: { screen: ArticleList89440Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
