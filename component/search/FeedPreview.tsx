import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../App";

export interface FeedPreviewProps {
    uid: string;
    img_uri?: string;
};

const placeholderUrl = "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13262118&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNi82MmZhMWExMy03ZjRmLTQ1NWMtYTZlNy02ZTk2YjhjMjBkYTk=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006";

const FeedPreview: React.FC<FeedPreviewProps> = ({ img_uri = placeholderUrl, uid }) => {

  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'FeedDetail'>>();

    const handlePress = () => {
        console.log(uid);
        navigation.navigate('FeedDetail', { uid });
    }

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
            <View style={styles.imageContainer}>
                <Image source={{ uri: img_uri }} style={styles.image} />
            </View>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      marginBottom: 20,
    },
    scrollContainer: {
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
    },
    imageContainer: {
      width: (Dimensions.get("window").width - 40) / 3,
      height: (Dimensions.get("window").width - 40) / 3,
      justifyContent: "center",
      alignItems: "center",
    },
    image: {
      width: "100%",
      height: "100%",
      resizeMode: "cover",
    },
  });
  
  export default FeedPreview;