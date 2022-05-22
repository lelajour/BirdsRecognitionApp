import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { useState } from 'react';

const LibraryDisplay = (route, navigation) => {
    let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const [birds, setbirds] = useState([]);


    // console.log("Hello");
    console.log(route.params);
    const containFirstLetter = (letter, birds) => {
        for (bird of birds) {
            if (bird.name.charAt(0) === letter) {
                return true;
            }
        }
    }

    if (route.params) {
        setbirds({...this.birds, list: route.params});
    }

    if (birds) {
        return (
            <ScrollView style={{backgroundColor: '#fff'}}>
                <View style={styles.libcontainer}>
                    {alpha.map ((letter, index) => {
                        if (containFirstLetter(letter, birds) == true) {
                            return (
                                <View key={index} style={styles.libalpha}>
                                    <Text style={styles.liblettertext}>{letter}</Text>
                                    <View style={styles.separator}/>
                                    {birds.map((bird, index) => {
                                        if (bird.name.charAt(0) === letter) {
                                            return (
                                                <View key={index} style={styles.elem}>
                                                    <Text onPress={() => navigation.navigate('BirdDetails')} >{bird.name}</Text>
                                                </View>
                                            )
                                        }
                                    })}
                                </View>
                            )
                        }
                    })}
                </View>
            </ScrollView>
        )
    }
    return (
        <View style={styles.libcontainer}>
            <Text>Loading...</Text>
        </View>
    )
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

export { LibraryDisplay };