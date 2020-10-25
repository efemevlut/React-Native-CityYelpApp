import axios from "axios"
import React, {useState, useEffect} from "react";
import {View, Text, FlatList} from "react-native"

import {CityItem} from "../components"

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

    const renderCities = ({item}) => <CityItem cityName={item}/>

    const renderSeperator = () => <View style={{borderWidth: 1, borderColor: "#c7a4ff"}} />

    return (
        <View>
            <FlatList 
                data= {cityList}
                renderItem={renderCities}
                ItemSeparatorComponent={renderSeperator} 
            />
        </View>
    )
}

export {CityList};