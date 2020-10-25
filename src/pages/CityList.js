import axios from "axios"
import React, {useState, useEffect} from "react";
import {View, Text, FlatList} from "react-native"


const CityList = (props) => {

    const [cityList, setCityList] = useState([])
    
    const fetchCityData = async () => {
        const {data} = await axios.get("https://opentable.herokuapp.com/api/cities")
        console.log(data)
        setCityList(data.cities)
    }

    useEffect(() => {
        fetchCityData();
    }, [])

    const renderCities = ({item}) => <Text>{item}</Text>

    return (
        <View>
            <FlatList 
                data= {cityList}
                renderItem={renderCities}
            />
        </View>
    )
}

export {CityList};