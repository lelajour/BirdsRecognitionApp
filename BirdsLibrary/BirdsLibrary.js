import Client from '../Supabase/SupabaseClient';
import { LibraryDisplay } from './LibraryDisplay/LibraryDisplay';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { View } from 'react-native';
import { BirdDetails } from './BirdDetails/BirdDetails';


const BirdsLibrary = ({ navigation }) => {
  const Stack = createNativeStackNavigator();
  const [birds, setbirds] = useState({list: [], Loading: true});

  if (birds.Loading === true) {
      Client.GetBirds().then(res => {
          setbirds({...this.birds, list: res, Loading: false});
      }).catch(err => {
          console.log(err);
      });
  }

  if (birds.Loading === false) {
    return (
        <Stack.Navigator initialRouteName="Bibliothèque">
                <Stack.Screen name="Bibliothèque" component={LibraryDisplay} initialParams={{birds: birds.list}} />
                <Stack.Screen name="BirdDetails" component={BirdDetails} />
        </Stack.Navigator>
    );
  }
  return (
      <View style={{width: "100%",height: "100%", backgroundColor: "#fff"}}/>
  );
}


export {BirdsLibrary};