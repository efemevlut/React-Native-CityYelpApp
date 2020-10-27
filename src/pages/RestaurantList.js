import axios from "axios";
import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { SearchBar } from "../components";
import { RestaurantItem } from "../components/RestaurantItem";

let originalRestaurantList = []

const RestaurantList = (props) => {
    const [restaurantList, setRestaurantlist] = useState([])

    const {selectedCity} = props.route.params

    const fetchRestaurant = () => {
        axios.get(
            "https://opentable.herokuapp.com/api/restaurants" ,
            {
                params: {
                    city : selectedCity
                }
            })
            .then(response => {
                setRestaurantlist(response.data.restaurants)
                originalRestaurantList = [...response.data.restaurants]
            })
            .catch(err => console.log(err))
    
    }
    
    useEffect(() => {
        fetchRestaurant()
    }, [])

    const renderRestaurants = ({item}) => {
        return (
            <RestaurantItem
                restaurant={item}
                onSelect={() => props.navigation.navigate("Details", { selectedRestaurant : item})}
            />
        )
        }   

    const searchRestaurant = (search) => {
        const filteredRestaurant = originalRestaurantList.filter((restaurant) => {
            const restaurantName = restaurant.name.toUpperCase();
            const text = search.toUpperCase();
            
            return restaurantName.indexOf(text) > -1
        })
        setRestaurantlist(filteredRestaurant)
    }

    return (
        <View>
            <Text style={{margin: 5, fontWeight: "bold", fontSize:40}}>
                {selectedCity} Restaurants
            </Text>
            <SearchBar placeholder="Search a restaurant" onSearch={(value) => searchRestaurant(value)} />
            <FlatList 
                keyExtractor={(_, index) => index.toString()}
                data={restaurantList}
                renderItem={renderRestaurants}
            />
        </View>
    )
}

export {RestaurantList};