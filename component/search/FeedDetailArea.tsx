import { Dimensions, SafeAreaView, ScrollView, StyleSheet } from "react-native"
import FeeadArea, { FeedAreaProps } from "../feed/FeedArea"
import { RouteProp } from '@react-navigation/native';
import { Header } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

type FeedDetailRouteProp = RouteProp<RootStackParamList, 'FeedDetail'>;

interface FeedDetailAreaProps {
  route: FeedDetailRouteProp;
}


const placeHolderList : FeedAreaProps[] = [
    {
        star: 5, score: 100,
        uid: "",
        user_uid: ""
    },
    {
        star: 4, score: 50,
        uid: "",
        user_uid: ""
    },
    {
        star: 3, score: 80,
        uid: "",
        user_uid: ""
    },
]

const FeedDetailArea : React.FC<FeedDetailAreaProps> = ({route}) => {
    const { uid } = route.params;

    const placeHolderFirstFeed : FeedAreaProps = {
        uid: uid,
        user_uid: "",
        star: 0,
        score: 0,
        comments: [
            {
                userName: `lorem ${uid}`,
                contents: `now viewing ${uid}th contents`
            }
        ]
    }

    const detailList : FeedAreaProps[] = [placeHolderFirstFeed, ...placeHolderList];
    
    return (
        <SafeAreaView style={styles.safeAreaContainer}>
        <ScrollView style={styles.listWrapper}>
          {detailList.map((val, idx) => <FeeadArea uid={val.uid} user_uid={val.user_uid} star={val.star} score={val.score} comments={val.comments} key={idx}/>)}
        </ScrollView>
      </SafeAreaView>
    );
};

export default FeedDetailArea;

const styles = StyleSheet.create({
    listWrapper: {
        display: "flex",
        width: "100%",
        paddingLeft: 15,
        paddingRight: 15,
        overflow: "scroll",
        backgroundColor: "white",
        flexDirection: 'column',
    },
    safeAreaContainer: {
      backgroundColor: "white",
    }
  });