import React from 'react';
import { Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface DetailsPageProps {
  route: {
    params: {
      media: {
        title: string;
        poster_path: string;
        overview: string;
        id: string;
        release_date?: string;
        first_air_date?: string;
        vote_average: number;
      };
      mediaType: string;
    };
  };
}

const DetailsPage: React.FC<DetailsPageProps> = ({ route }) => {
  const { media, mediaType } = route.params;

  const saveToAsyncStorage = async () => {
    try {
      // Récupérer les données existantes ou initialiser un tableau vide
      const existingDataString = await AsyncStorage.getItem('savedMediaData');
      let existingData = existingDataString ? JSON.parse(existingDataString) : [];
  
      // Assurer que existingData est un tableau
      if (!Array.isArray(existingData)) {
        existingData = [];
      }
  
      // Vérifier si la nouvelle donnée existe déjà dans le tableau
      const isNewData = existingData.some((item) => item.title === media.title);
  
      if (!isNewData) {
        // Ajouter la nouvelle donnée au tableau
        const newData = {
          id: media.id, 
          title: media.title,
          poster_path: media.poster_path,
          overview: media.overview,
          release_date: media.release_date,
          first_air_date: media.first_air_date,
          vote_average: media.vote_average,
        };
  
        existingData = [...existingData, newData];
  
        // Sauvegarder le tableau mis à jour
        await AsyncStorage.setItem('savedMediaData', JSON.stringify(existingData));
  
        console.log('Data saved successfully:', newData);
      } else {
        console.log('Data already exists. Not saving duplicates.');
      }
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };
  

  return (
    <ScrollView style={styles.screen}>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>Title: {media.title}</Text>
        <Image
          style={styles.poster}
          source={{ uri: `https://image.tmdb.org/t/p/w500${media.poster_path}` }}
        />
        <Text style={styles.id}>id: {media.id}</Text>
        <Text style={styles.overview}>Overview: {media.overview}</Text>
        {mediaType === 'movie' ? (
          <Text style={styles.overview}>Release Date: {media.release_date} {media.first_air_date}</Text>
        ) : (
          <Text style={styles.overview}>First Air Date: {media.first_air_date}</Text>
        )}
        <Text style={styles.note}>Average note: {media.vote_average} / 10</Text>

        <TouchableOpacity style={styles.saveButton} onPress={saveToAsyncStorage}>
          <Text style={styles.buttonText}>Sauvegarder les Infos</Text>
        </TouchableOpacity>
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
  id: {
    marginTop: 20,
    marginBottom: 50,
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
  saveButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
  },
});

export default DetailsPage;





