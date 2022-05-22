import { Client } from '../Supabase/SupabaseClient';
import { LibraryDisplay } from './LibraryDisplay/LibraryDisplay';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { BirdDetails } from './BirdComponent/BirdDetails/BirdDetails';


const BirdsLibrary = ({ navigation }) => {
  const client = new Client();
  const Stack = createNativeStackNavigator();
  const [birds, setbirds] = useState({list: [], Loading: true});

  if (birds.Loading === true) {
      client.GetBirds().then(res => {
          setbirds({...this.birds, list: res, Loading: false});
          console.log(res);
      }).catch(err => {
          console.log(err);
      });
  }

  if (birds.Loading === false) {
    return (
        <Stack.Navigator
            initialRouteName="Library"
            screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Library" component={LibraryDisplay} initialParams={{'birds': birds.list}} />
                <Stack.Screen name="BirdDetails" component={BirdDetails} />
        </Stack.Navigator>
    );
  }
  else {
    return (
       null
    );
  }
}


export {BirdsLibrary};