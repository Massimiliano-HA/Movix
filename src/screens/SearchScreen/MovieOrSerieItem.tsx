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
    <View style={styles.container}>
      <TouchableOpacity style={styles.container} onPress={() => goToDetails(item)}>
      <Image
          style={styles.poster}
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
        />
        <View style={styles.textContainer}>
            <Text style={styles.text}>{item.title}</Text>
            <Text style={styles.overview}>{item.overview}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        textAlign: 'center',
        fontSize: 23,
        fontWeight: 'bold',
        color: 'lightgray',
        maxWidth: 250,
    },
    poster: {
        width: 150,
        height: 200,
        marginRight: 10,
        marginBottom: 10,
    },
    overview: {
        marginTop: 10,
        color: 'lightgray',
        maxWidth: 250,
        maxHeight: 105,
        fontSize: 11,
    },
    textContainer: {
        flexDirection: 'column'
    }
});

export default MovieOrSeriesItem;
