import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import UserProfile, { ProfileProps } from "./UserProfile";

interface StoryListProps {
    profileList?: ProfileProps[];
}

const Tester : ProfileProps[] = [
    {uid : '000', image_url: "", name: "tester 1"},
    {uid : '000', image_url: "", name: "tester 2"},
    {uid : '000', image_url: "", name: "tester 3"},
    {uid : '000', image_url: "", name: "tester 4"},
    {uid : '000', image_url: "", name: "tester 5"},
    {uid : '000', image_url: "", name: "tester 6"},
    {uid : '000', image_url: "", name: "tester 7"},
]

const StoryList : React.FC<StoryListProps> = ({profileList = Tester}) => {
    return (
        <View style = {styles.listWrapper}>
            {
                profileList.map(
                    (value, idx) => 
                    <UserProfile uid={value.uid} image_url={value.image_url} name={value.name} key={idx}/>
                )
            }
        </View>
    );
}

export default StoryList;

const styles = StyleSheet.create({
    listWrapper: {
        display: "flex",
        width: "100%",
        flexDirection: "row",
        gap: 6,
        overflow: "scroll",
    },
});
