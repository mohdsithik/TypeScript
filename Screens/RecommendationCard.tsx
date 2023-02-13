import React from "react";
import { View, Text, FlatList, ImageBackground } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import Styles from "./LoginStyle";
import { DataType } from "./Types";
import { HeaderSection } from "./HeaderSection";
import Data from './Data.json';
import { SliderComponent } from "./sliderContainer";

export const RecommendationCard = () => {
    const renderRecommend = (item: DataType) => {
     
        const SourceData = item.item;
        return (
            <ImageBackground source={{ uri: SourceData.image }} style={Styles.imageBackground}>
                <LinearGradient
                    colors={['transparent', 'transparent', '#000000',]}
                    style={{ height: '100%', width: '100%' }}>
                    <Text style={Styles.cardData}>{SourceData.title}</Text>
                    <Text style={Styles.cardDes}>{SourceData.description}</Text>
                
                </LinearGradient>
            </ImageBackground>
        )
    }
    return (
        <View>
            <LinearGradient
                colors={['#FFFFFF', '#E8F9FF', '#E8F9FF',]}
                style={Styles.linearGradient}>
                <HeaderSection
                    title={"Recommendation"}
                    description={"Explore destinations by selecting a date range"}
                />
                <FlatList
                    data={Data}
                    renderItem={renderRecommend}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={Styles.FlatePadding}
                />
                <SliderComponent/>
               
            </LinearGradient>
        </View>
    )
}