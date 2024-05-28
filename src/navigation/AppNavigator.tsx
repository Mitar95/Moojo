import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OfferFeed from '../screens/OfferFeed';
import OfferDetails from '../screens/OfferDetails';
import { Offer } from '../services/offersApi';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const getTitleForDetailsScreen = (title: string) => {
  const parts = title.split('Cashback on ');
  if(parts.length === 2) {
    return parts[1];
  } else {
    return 'Details';
  }
}

const Stack = createStackNavigator<AppStackParamList>();

const AppNavigator = () => {

  const {top: topInset} = useSafeAreaInsets();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OfferFeed">
        <Stack.Screen
          name="OfferFeed"
          component={OfferFeed}
          options={() => ({
            headerShown: false,
            cardStyle: {
              paddingTop: topInset,
            }
          })}
        />

        <Stack.Screen
          name="OfferDetails"
          component={OfferDetails}
          options={({route}) => ({
            title: getTitleForDetailsScreen(route.params.offer.title),
            headerBackTitleVisible: false,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export type AppStackParamList = {
  OfferFeed: undefined;
  OfferDetails: {
    offer: Offer;
  };
 };

export default AppNavigator;
