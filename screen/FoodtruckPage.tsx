import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { RootStackParamList } from "../App";
import FeedPreview, { FeedPreviewProps } from "../component/search/FeedPreview";
import UserProfile from "../component/storyList/UserProfile";

const ProfileBox = () => {
  return (
    <>
      <View style={styles.ProfileBoxContainer}>
        <Text style={{ fontSize: 20, fontWeight: 400 }}>FoodTruckName</Text>
        <UserProfile uid={""} image_url={""} name={""} />
        <Text style={{ fontSize: 15, fontWeight: 400 }}>About This Truck</Text>
      </View>
    </>
  );
};
const MiddleContent = ({
  text,
  number,

  onPress,
}: {
  text: string;
  number: number;

  onPress: () => void;
}) => {
  return (
    <Pressable
      style={{
        flexDirection: "column",
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 20,
        alignItems: "center",
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 15, fontWeight: 400 }}>{text}</Text>
      <Text style={{ fontSize: 25, fontWeight: 400 }}>{number.toString()}</Text>
    </Pressable>
  );
};

const StarContent = ({
  ratingNumber,
  ratingStar,
}: {
  ratingNumber: number;
  ratingStar: number;
}) => {
  return (
    <View
      style={{
        flexDirection: "column",
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 20,
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 15, fontWeight: 400 }}>평균별점</Text>
      <Text style={{ fontSize: 20, fontWeight: 400 }}>
        {ratingNumber.toString()}
      </Text>
      <Text style={{ fontSize: 15, fontWeight: 400 }}>
        {ratingStar.toString()}
      </Text>
    </View>
  );
};

type FoodtruckPageRouteProp = RouteProp<RootStackParamList, "FoodtruckPage">;
type NavigationProp = StackNavigationProp<RootStackParamList>;

const FoodtruckPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<FoodtruckPageRouteProp>();
  const { uid } = route.params;

  const placeholderSearchView: FeedPreviewProps[] = Array.from(
    { length: 90 },
    (_, index) => ({
      uid: index.toString(),
    })
  );
  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <View style={styles.profileContainer}>
        <ProfileBox />
      </View>
      <View style={{ alignSelf: "center" }}>
        <Text>uid:{uid}</Text>
      </View>
      <View style={styles.middleContainer}>
        <MiddleContent
          text="팔로워"
          number={500}
          onPress={() => {
            navigation.navigate("FollowerPage");
          }}
        />
        <MiddleContent text="리뷰수" number={500} onPress={() => {}} />
        <StarContent ratingNumber={87} ratingStar={4.3} />
      </View>
      <View style={styles.flatListContainer}>
        <FlatList
          data={placeholderSearchView}
          keyExtractor={(item) => item.uid}
          numColumns={3}
          renderItem={({ item }) => (
            // <FeedPreview uid={item.uid} img_uri={item.img_uri} />
            <FeedPreview uid={item.uid} />
          )}
          columnWrapperStyle={styles.row}
          style={styles.listWrapper}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  ProfileBoxContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 10,
  },
  SafeAreaView: {
    borderWidth: 1,
  },
  middleContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    gap: 20,
    padding: 10,
    alignSelf: "center",
  },
  profileContainer: {
    justifyContent: "center",
    paddingTop: 40,
    padding: 20,
    paddingBottom: 10,
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
  },
  flatListContainer: {},
  row: {
    marginBottom: 5,
    justifyContent: "space-between",
  },
  listWrapper: {
    display: "flex",
    width: "100%",
    paddingLeft: 15,
    paddingRight: 15,
    overflow: "scroll",
    backgroundColor: "white",
    flexDirection: "column",
    marginBottom: 60,
  },
});
export default FoodtruckPage;
