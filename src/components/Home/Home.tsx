import React from "react";

import { FlatList, Image, ScrollView, Text, View } from "react-native";
import { styles } from "./Home.style.ts";

type renderItemProps = {
  item: {
    title: string;
    image: string;
  };
};

const Home = () => {
  const data = [
    {
      title: "Uncharted",
      image: "https://i.ebayimg.com/images/g/hscAAOSwL3RiHLd9/s-l1200.webp",
    },
    {
      title: "Tennet",
      image: "https://static.actu.fr/uploads/2021/01/cine-affiche-tenet.jpg",
    },
    {
      title: "Bladerunner 2049",
      image:
        "https://antreducinema.fr/wp-content/uploads/2020/04/BLADE-RUNNER-2049-scaled.jpg",
    },
    {
      title: "Le Joker",
      image:
        "https://images.affiches-et-posters.com//albums/3/56168/medium/affiche-film-joker.jpg",
    },
    {
      title: "Star Wars - EP7",
      image:
        "https://www.photosmurales.fr/media/catalog/product/cache/3/thumbnail/9df78eab33525d08d6e5fb8d27136e95/v/d/vd-046-star-wars-official-poster-ep7.jpg",
    },
  ];

  const renderItem = ({ item }: renderItemProps) => (
    <>
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.itemImage} />
        <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
      </View>
    </>
  );

  return (
    <ScrollView>
      <Text style={styles.title}>Accueil</Text>
      <Text style={styles.flatListTitle}>Les films les plus populaires</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.flatListTitle}>Les séries les plus populaires</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.flatListTitle}>Actuellement au cinéma</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
      <Text style={styles.flatListTitle}>Films prochainement disponible</Text>
      <FlatList
        horizontal
        data={data}
        renderItem={renderItem}
        style={styles.flatListContainer}
        keyExtractor={(item, index) => index.toString()}
      />
    </ScrollView>
  );
};
export default Home;
