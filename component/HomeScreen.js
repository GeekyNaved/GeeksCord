import React, { useState, useEffect } from 'react';
import { StyleSheet, FlatList, StatusBar, View, Text, TouchableOpacity, TextInput, LogBox } from 'react-native';
import { List, Card } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import { AdMobBanner } from 'expo-ads-admob';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    fetchCourse();
  }, [])
  async function fetchCourse() {
    const response = await fetch(`https://geekynaved.github.io/GeeksCord-api/`);
    response.json()
      .then((data) => {
        setCourse(data)
      }).catch((err) => console.log(err));
  }
  const ItemView = ({ item }) => {
    return (
      <Card key={item.id} style={styles.courseCard} onPress={() => {
        navigation.navigate('LinksScreen', {
          hindi: `${item.link1}`,
          english: `${item.link2}`,
        });
      }}>
        <List.Item
          title={item.title}
          right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
        />
      </Card>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={{ marginBottom: 60 }}>
        <View style={styles.header}>
          <Text style={styles.appName}>Geeks Cord</Text>
          <TouchableOpacity activeOpacity={1} onPress={() => navigation.navigate('SearchScreen', course)}>
            <View pointerEvents="none">
              <TextInput
                style={styles.searchBar}
                placeholder="search courses..."
                placeholderTextColor="grey"
                pointerEvents='none'
              />
            </View>
          </TouchableOpacity>
        </View>
        
        <FlatList
          data={course}
          keyExtractor={item => item.id}
          renderItem={ItemView}
        />

      </ScrollView>
      <AdMobBanner
        style={styles.bottomAdBanner}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  courseCard: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 25,
    padding: 25,
    backgroundColor: '#fff',
    color: '#fff',
    elevation: 4
  },
  header: {
    backgroundColor: '#6200ee',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15
  },
  appName: {
    color: 'white',
    fontSize: 26,
    fontWeight: 'bold',
    marginLeft: 25
  },
  searchBar: {
    marginRight: 25,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    minWidth: 160,
    minHeight: 40
  },
  bottomAdBanner: {
    position: "absolute",
    bottom: 0
  },
  interstitialBanner: {
    width: "100%",
    marginLeft: 0
  }
})

