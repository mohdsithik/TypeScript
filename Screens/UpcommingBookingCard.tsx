import React from "react";
import { View, Text, Image, TextInputComponent, FlatList } from "react-native";
import { Styles } from "./LoginStyle";
import { UpcommingBookingData } from "./Types";
import UpcommingData from "../JsonDatas/UpcommingData.json";
import { HeaderSection } from "./HeaderSection";
export const UpcommingBookingCard = () => {
    const UpcommingBookingData = UpcommingData;

    const renderUpcommingData = (item: UpcommingBookingData) => {
        console.log(item.item.date);
        return (
            <View style={Styles.renderUpcommingDataCard}>
                <Image source={{ uri: item.item.image }} style={Styles.imageCard} />
                <View style={Styles.contentBox}>
                    <Text style={Styles.cityName}>{item.item.city}</Text>
                    <Text style={Styles.dateContent}>{item.item.date}</Text>
                </View>
            </View>
        )

    }
    return (
        <View>
            <HeaderSection
                title={"Upcoming bookings"}
                description={"View and complete your itenary"}
            />
            <FlatList
                data={UpcommingData}
                renderItem={renderUpcommingData}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={Styles.upcommindDataCard}
            />
        </View>
    )
}