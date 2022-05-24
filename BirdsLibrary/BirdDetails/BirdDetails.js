import { StyleSheet, Text, View, Image } from 'react-native';
import { useState } from 'react';
import Client from '../../Supabase/SupabaseClient';

const BirdDetails = (route, navigation) => {
  const [bird, setbird] = useState({details: {}, Loading: true});
  const name = route.route.params.name;

  if (bird.Loading === true) {
      Client.GetBirdDetails(name).then(res => {
          setbird({...this.bird, details: res[0], Loading: false});
      }).catch(err => {
          console.log(err);
      });
  }

  console.log(bird.details.img);
  // if (bird.Loading === false) {
  //     return (
  //         <View style={styles.container} >
  //             <View style={{flex: 5}}>
  //                   <Text>{bird.details.name}</Text>
  //             </View>
  //             <View style={{flex: 5}}>
  //                   <Image style={styles.image} source={{uri: bird.details.img}} onError={(err) => {console.log(err.nativeEvent.error)}}/>
  //             </View>
  //         </View>
  //     );
  // }
  return (
      <View style={styles.container} >
          <Text>Work in progress</Text>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },
  image: {
    flex: 1,
    width: '25pt',
    height: '25n',
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
});

export { BirdDetails };