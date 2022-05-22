import { BirdsLibrary } from './BirdsLibrary/BirdsLibrary.js';
import { BirdsRec } from './BirdsRec/BirdsRec.js';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, SafeAreaView } from 'react-native';
import 'react-native-url-polyfill/auto';

export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <SafeAreaView style={[styles.maincontainer]}>
        <NavigationContainer style={styles.navcontainer}>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarLabelStyle: styles.tabBarLabelStyle,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;

                        if (route.name === 'Birds Library') {
                            iconName = focused
                                ? 'md-library-sharp'
                                : 'md-library-outline';
                        } else if (route.name === 'Birds Record') {
                            iconName = focused ? 'record-circle' : 'record-circle-outline';
                        }

                        if (route.name === 'Birds Library') {
                            return <Ionicons name={iconName} size={size} color={color} />;
                        } else if (route.name === 'Birds Record') {
                            return <MaterialCommunityIcons name={iconName} size={size} color={color} />
                        }
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    // tabBarShowLabel: false,
                })} >
                <Tab.Screen
                    name="Birds Library"
                    component={BirdsLibrary} />
                <Tab.Screen
                    name="Birds Record"
                    component={BirdsRec} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#fff',
  },
    navcontainer: {
        height: "87%",
      justifyContent: "center",
        backgroundColor: "green",
      // flex:1,
    },
    tabBarLabelStyle: {
        fontSize: 14,
        // fontWeight: "bold",
        color: "grey"
    },
});
