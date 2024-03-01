import React from 'react';
import { Text, SafeAreaView, Image, StyleSheet, ScrollView } from 'react-native';
interface DetailsPageProps {
  route: {
    params: {
      media: {
        title: string;
        poster_path: string;
        overview: string;
        release_date?: string;
        first_air_date?: string;
        vote_average: number;
        mediaType: string;
      };
    };
  };
}

const DetailsPage: React.FC<DetailsPageProps> = ({ route }) => {
  const { media } = route.params;

  return (
    <ScrollView style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Title: {media.title}</Text>
        <Image
          style={styles.poster}
          source={{ uri: `https://image.tmdb.org/t/p/w500${media.poster_path}` }}
        />
        <Text style={styles.overview}>Overview:{media.overview} </Text>
        {media.mediaType == 'movie' ? (
          <Text style={styles.overview}>Release Date: {media.release_date}</Text>
        ) : (
          <Text style={styles.overview}>Release Date: {media.first_air_date}</Text>
        )}
        <Text style={styles.note}>Average note: {media.vote_average} / 10</Text>
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'black',
  },
  container: {
    alignItems: 'center',
  },
  title: {
    marginTop: 40,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 23,
    fontWeight: 'bold',
    color: 'lightgray',
    maxWidth: 250,
  },
  poster: {
    width: 300,
    height: 400,
    marginRight: 10,
    marginBottom: 10,
  },
  overview: {
    marginTop: 20,
    color: 'lightgray',
    maxWidth: 350,
    fontSize: 15,
  },
  note: {
    marginTop: 20,
    marginBottom: 50,
    color: 'lightgray',
    maxWidth: 350,
    fontSize: 15,
  },
  textContainer: {
    flexDirection: 'column'
  }
});

export default DetailsPage;
