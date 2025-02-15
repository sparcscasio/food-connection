import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface StarProps {
    starCount : number,
    score: number,
}

const Star : React.FC<StarProps> = ({starCount, score}) => {
    const _star = Array(5).fill(false).map((_, index) => index < starCount);

    return (
        <View style = {styles.container}>
        <Text style={{fontSize : 22, fontWeight: 400,}}>{score}</Text>
        <View style = {styles.starContainer}>
            {_star.map((val, idx) => val ? <MaterialIcons name="star" size={15} color="black" key={idx}/> : <MaterialIcons name="star-border" size={15} color="black" key={idx}/>)}
        </View>
        </View>
    )
}

export default Star;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    starContainer: {
      display: 'flex',
      flexDirection: 'row',
    },
  });