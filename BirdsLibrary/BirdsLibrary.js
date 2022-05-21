import { StyleSheet, Text, View, ScrollView } from 'react-native';
import MakeClient from '../Supabase/SupabaseClient';
import GetBirdsList from '../Supabase/GetBirdsList';


const BirdsLibrary = ({ navigation }) => {
  let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const client = MakeClient();
  const birdsList = GetBirdsList(client);

  return (
    <ScrollView>
        <View style={styles.libcontainer}>
            {alpha.map(r =>
                <View key={r} style={styles.libalpha}>
                    <Text style={{color:"gray"}}> {r} </Text>
                    <View style={styles.separator}/>
                    <View style={styles.elem}>
                        <Text>Test</Text>
                        <Text>Test</Text>
                    </View>
                </View>
        )}
    </View>
    </ScrollView>
);
}

const styles = StyleSheet.create({
    libcontainer: {
        flex: 1,
        backgroundColor: '#fff',
        padding:10,
    },

    libalpha: {
        marginTop:10,
    },

    elem: {
        paddingLeft: 25,
        padding: 10,
        paddingBottom: 0,
        backgroundColor: "#fff",
    },
    separator: {
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        margin: 5,
        // marginRight: 10
    }

});

export {BirdsLibrary};