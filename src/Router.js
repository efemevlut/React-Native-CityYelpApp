import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import {CityList, RestaurantDetails, RestaurantList} from "./pages"


const Router = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Cities" component={CityList} options={{headerShown: false}}/>
                <Stack.Screen name="Restaurants" component={RestaurantDetails} />
                <Stack.Screen name="Details" component={RestaurantList} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router;