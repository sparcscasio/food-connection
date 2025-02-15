import React from "react";
import { View, Text, ScrollView, Image, StyleSheet, Dimensions } from "react-native";

interface _Image {
  uri : string;
}

interface FeedScrollAreaProps {
  image_uri? : _Image[],
}
// 테스트용
const images = [
  { uri: "https://gongu.copyright.or.kr/gongu/wrt/cmmn/wrtFileImageView.do?wrtSn=13262118&filePath=L2Rpc2sxL25ld2RhdGEvMjAyMC8yMS9DTFMxMDAwNi82MmZhMWExMy03ZjRmLTQ1NWMtYTZlNy02ZTk2YjhjMjBkYTk=&thumbAt=Y&thumbSe=b_tbumb&wrtTy=10006" },
  { uri: "https://image.utoimage.com/preview/cp872722/2022/12/202212008462_500.jpg" },
  { uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSswUrWjM2DSFQVcZ44Vfupk54C60fxZJygjQ&s" },
  { uri: "https://mblogthumb-phinf.pstatic.net/MjAyMTAyMjNfNjQg/MDAxNjE0MDM1NDM4Mjky.BjBzgrbXiOb8qJA_I8k-8rWtEwDYyVJhtyT6fcWXTyIg.QTCXxPm6mHqxvmzoa-BHdlbsyjF8SaIJt_sNJ0mH5Wkg.JPEG.ckp4646/g26c096832d924bee4fea17e25a7ab0d11814ad34da25a2fcf24138cd09240c80a5f7f314956.jpg?type=w800" },
];

const FeedScrollArea: React.FC<FeedScrollAreaProps> = ({ image_uri = images }) => {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {image_uri.map((image, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: image.uri }} style={styles.image} />
          </View>
        ))}
      </ScrollView>
    </View>
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
    width: Dimensions.get("window").width - 30,
    height: Dimensions.get("window").width - 30,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
});

export default FeedScrollArea;
