import { View, Text, StyleSheet, SafeAreaView, FlatList } from "react-native";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import TextInputArea from "../component/TextInputArea";
import FeedPreview, { FeedPreviewProps } from "../component/search/FeedPreview";

const SearchPage: React.FC = () => {

    const placeholderSearchView : FeedPreviewProps[] = Array.from({ length: 90 }, (_, index) => ({
        uid: index.toString(),
      }));

    return (
        <SafeAreaView style={styles.safeAreaContainer}>
        <TextInputArea></TextInputArea>
            <FlatList
            data={placeholderSearchView}
            keyExtractor={(item) => item.uid}
            numColumns={3}
            renderItem={({ item }) => <FeedPreview uid={item.uid} img_uri={item.img_uri}/>}
            columnWrapperStyle={styles.row}
            style={styles.listWrapper}
            />
        </SafeAreaView>
    )
}

export default SearchPage;

const styles = StyleSheet.create({
    listWrapper: {
        display: "flex",
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        overflow: "scroll",
        backgroundColor: "white",
        flexDirection: 'column',
        marginBottom: 60,
    },
    safeAreaContainer: {
      backgroundColor: "white",
    },
    row: {
        marginBottom: 5,
        justifyContent: "space-between",
    },
  });