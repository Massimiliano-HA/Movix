import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

interface MovieOrSeriesItemProps {
  item: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  };
  goToDetails: (item: any) => void;
}

const MovieOrSeriesItem: React.FC<MovieOrSeriesItemProps> = ({ item, goToDetails }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => goToDetails(item)}>
    <Image
      source={{
        uri: `https://image.tmdb.org/t/p/w500${item.poster_path}`,
      }}
      style={styles.itemImage}
    />
    <Text style={styles.itemTitle} numberOfLines={1} ellipsizeMode="tail">
      {item.title}
    </Text>
    </TouchableOpacity>
  </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignItems: "center",
    marginRight: 10,
    width: 100,
  },
  itemImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
  },
  itemTitle: {
    marginTop: 5,
    fontSize: 12,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
  },
});

export default MovieOrSeriesItem;
