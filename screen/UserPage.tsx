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
import { useRecoilState } from "recoil";
import { userInfoState } from "../utils/recoil/atoms/userInfo";
import { useEffect, useState } from "react";
import { loadData } from "../utils/storage";

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

type UserPageRouteProp = RouteProp<RootStackParamList, "UserPage">;
type NavigationProp = StackNavigationProp<RootStackParamList>;

const UserPage = () => {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<UserPageRouteProp>();
  const { uid } = route.params || "";

  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    // 앱이 실행될 때 저장된 데이터를 불러오기
    loadData("userEmail").then((data) => {
      if (data) setUserInfo(data);
    });
  }, []);
  
  console.log(userInfo);

  const ProfileBox = () => {
    return (
      <>
        <UserProfile uid={uid} image_url={""} name={userInfo} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: 400 }}>{userInfo}</Text>
          <Text style={{ fontSize: 15, fontWeight: 400 }}>
            내 계정입니다!
          </Text>
        </View>
      </>
    );
  };
  const placeholderSearchView: FeedPreviewProps[] = Array.from(
    { length: 10 },
    (_, index) => ({
      uid: index.toString(),
    })
  );
  return (
    <SafeAreaView>
      <View style={styles.profileContainer}>
        <ProfileBox />
        {/* <Text>uid:{uid}</Text> */}
      </View>
      <View style={styles.middleContainer}>
        <MiddleContent text="작성한리뷰" number={placeholderSearchView.length} onPress={() => {}} />
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
  SafeAreaView: {
    backgroundColor: 'white',
  },
  middleContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 20,
    padding: 10,
  },
  profileContainer: {
    justifyContent: "flex-start",
    paddingTop: 40,
    padding: 20,
    paddingLeft: 30,
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
export default UserPage;
