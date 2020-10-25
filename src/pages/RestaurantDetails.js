import axios from "axios";
import React, {useEffect} from 'react';
import { View, Text } from 'react-native';

const RestaurantDetails = (props) => {

    const {selectedCity} = props.route.params

    const fetchRestaurants = () => {
        axios.get("https://opentable.herokuapp.com/api/restaurants", 
            {
                params: {
                    "city": selectedCity
                }
            }
            .then(response => console.log(object))
            .catch(err => console.log(err))
        )
    }

    useEffect(() => {
        
    })

    return (
        <View>
            <Text>{selectedCity}</Text>
        </View>
    )
}

export {RestaurantDetails};