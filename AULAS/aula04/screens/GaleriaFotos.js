
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

const imagens = [
   "https://picsum.photos/300?random=1",
   "https://picsum.photos/300?random=2",
   "https://picsum.photos/300?random=3",
   "https://picsum.photos/300?random=4",
   "https://picsum.photos/300?random=5",
   "https://picsum.photos/300?random=6",
   "https://picsum.photos/300?random=7",
   "https://picsum.photos/300?random=8",
   "https://picsum.photos/300?random=9",
   "https://picsum.photos/300?random=10",
   "https://picsum.photos/300?random=11",
   "https://picsum.photos/300?random=12",
   "https://picsum.photos/300?random=13",
   "https://picsum.photos/300?random=14",
   "https://picsum.photos/300?random=1",

];

function GaleriaFotos() {

  return <View style={{ flex: 1 }}>
    <View style={styles.appBar}>
        <Text style={styles.appTitle}>Galeria de Fotos</Text>
    </View>
    <ScrollView contentContainerStyle={styles.grid}>
        {imagens.map((imagem, index) => (
            <Image style={styles.photo} source={{uri: imagem}} key={index}/>
        ))}
    </ScrollView>
  </View>;
}

const styles = StyleSheet.create({
    appBar: {
        height: 64,
        padding: 16,
        justifyContent: "center",
        backgroundColor: "blue",
        marginBottom: 8,
        elevation: 3
    },
    appTitle: {
        color: "white",
        fontSize: 24
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        paddingHorizontal: 8
    },
    photo: {
        height: 100,
        width: "31%"
    }
});

export default GaleriaFotos;


