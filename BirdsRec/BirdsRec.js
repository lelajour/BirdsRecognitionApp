import { StyleSheet, Text, View } from 'react-native';

export function BirdsRec( { navigation } ) {
    return (
        <View style={styles.recontainer}>
            <Text>Birds Rec</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    recontainer: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});