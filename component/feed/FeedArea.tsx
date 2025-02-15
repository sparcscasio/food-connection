import { View, StyleSheet, Text } from "react-native";
import Star from "./Star";
import UserProfile from "../storyList/UserProfile";
import FeedScrollArea from "./FeedScrollArea";
import { useState } from "react";

export type Comment = {
    userName: string;
    contents: string;
}

export interface FeedAreaProps {
    uid: string,
    user_uid: string;
    star : number;
    score : number;
    comments?: Comment[];
}

const placeholderComments : Comment[] = [
    {userName: 'lorem1', 'contents': 'lorem ipsum'},
    {userName: 'lorem2', 'contents': '안녕하세요 한국어에서 어떤 식으로 나오는지 한번 테스트를 해보려고 해요'},
    {userName: 'lorem3', 'contents': 'lorem'},
    {userName: 'lorem4', 'contents': 'ipsum'},
    {userName: 'lorem5', 'contents': 'lorem ipsum'},
]

const FeeadArea : React.FC<FeedAreaProps> = ({uid, user_uid, star, score, comments = placeholderComments}) => {
    const [shownComment, setShownComment] = useState<Comment[]>(comments.slice(0, 2));
    const isCommentOverflow = comments.length > 3;
    
    const handleClickMore = () => {
        if (isCommentOverflow) {
            if (shownComment == comments) {
                setShownComment(comments.slice(0, 2));
            } else {
                setShownComment(comments);
            }
        }
    }

    return (
        <View style = {styles.container}>
            <View style = {styles.headerContainer}>
                <View style = {styles.profileContainer}>
                    <UserProfile uid={""} image_url={""} name={""}></UserProfile>
                    <Text style = {{fontSize: 20, fontWeight: 400}}>Name</Text>
                </View>
                <Star starCount={star} score={score}></Star>
            </View>
            <FeedScrollArea />
            {/* 댓글 보여주는 부분 */}
            <View style = {styles.commentList}>
                {shownComment.map((val, idx) => 
                <View style = {styles.commentContainer} key={idx}>
                    <Text style={{fontWeight: 700, fontSize: 15,}}>{val.userName}</Text>
                    <Text style ={styles.commentText}>{val.contents}</Text>
                </View>
                )}
                {isCommentOverflow && <Text style = {{color: 'grey'}} onPress={handleClickMore}>{comments == shownComment ? '접기' : `${comments.length-2}개의 댓글 더보기`}</Text>}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
      flex: 1,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: "space-between",
      alignItems: "center",
    },
    profileContainer: {
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        alignItems: 'center',
    },
    commentContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
    },
    commentList: {
        display: 'flex',
        flexDirection: 'column',
    },
    container: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: 5,
        marginBottom: 20,
    },
    commentText: {
        flexWrap: 'wrap',
        width: '100%',
        flexShrink: 1,
        fontSize: 15,
    }
  });

export default FeeadArea;