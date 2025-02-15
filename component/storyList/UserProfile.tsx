import { View, Text, StyleSheet, SafeAreaView } from "react-native";

export interface ProfileProps {
    uid: string;
    image_url: string;
    name: string;
}

const UserProfile : React.FC<ProfileProps> = ({uid, image_url, name}) => {
    return (
        <View>
            <View style = {styles.profileContainer} />
        </View>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        backgroundColor: "blue",
        width: 40,
        height: 40,
        borderRadius: 40,
    },
});

export default UserProfile;