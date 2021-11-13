import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, Text, StatusBar } from 'react-native';
import { List, Card, Button, Searchbar } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import {
  AdMobBanner, AdMobInterstitial
} from 'expo-ads-admob';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen({ navigation }) {
  const [filterData, setfilterData] = useState([])
  const [masterData, setMasterData] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    fetchCourse();
  }, [])
  const fetchCourse = () => {
    setfilterData(course);
    setMasterData(course);
  }
  const course = [
    {
      id: '1',
      title: 'HTML course',
      link1: 'https://youtu.be/BsDoLVMnmZs',
      link2: 'https://youtu.be/UB1O30fR-EE'
    },
    {
      id: '2',
      title: 'CSS course',
      link1: 'https://youtu.be/u5-K_ua9sOw',
      link2: 'https://youtu.be/1Rs2ND1ryYc'
    },
    {
      id: '3',
      title: 'Javascript course',
      link1: 'https://youtu.be/hKB-YGF14SY',
      link2: 'https://youtu.be/hdI2bqOjy3c'
    },
    {
      id: '4',
      title: 'Bootstrap course',
      link1: 'https://youtu.be/008dZPBZtLQ',
      link2: 'https://youtu.be/hnCmSXCZEpU'
    },
    {
      id: '5',
      title: 'Php and MySQL Course',
      link1: 'https://youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR',
      link2: 'https://youtube.com/playlist?list=PLillGF-Rfqbap2IB6ZS4BBBcYPagAjpjn'
    },
    {
      id: '6',
      title: 'JQuery Course',
      link1: 'https://youtu.be/YFlx1C8XwR0',
      link2: 'https://youtu.be/2OMzGhlIZpg'
    },
    {
      id: '7',
      title: 'Ajax Course',
      link1: 'https://youtu.be/FJZEVmF3eDg',
      link2: 'https://youtu.be/82hnvUYY6QA'
    },
    {
      id: '8',
      title: 'React JS Course',
      link1: 'https://youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ',
      link2: 'https://youtu.be/w7ejDZ8SWv8'
    },
    {
      id: '9',
      title: 'Node Js course',
      link1: 'https://youtu.be/ipnWAKoiBtY',
      link2: 'https://youtu.be/TlB_eWDSMt4'
    },
    {
      id: '10',
      title: 'Express Js Frameworke',
      link1: 'https://youtu.be/AX1AP83CuK4',
      link2: 'https://youtu.be/L72fhGm1tfE'
    },
    {
      id: '11',
      title: 'MongoDB',
      link1: 'https://youtube.com/playlist?list=PL9mB5ptJ4Ze3zq1tYr5E-YV-Mt6pkdG8i',
      link2: 'https://youtu.be/-56x56UppqQ'
    },
  ]
  const ItemView = ({ item }) => {
    return (
      <Card key={item.id} style={styles.qnsbtn} onPress={() => {
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
  const searchFilter = (text) => {
    if (text) {
      const newData = masterData.filter((item) => {
        const itemData = item.title ? item.title.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setfilterData(newData);
      setSearch(text);
    } else {
      setfilterData(masterData);
      setSearch(text);
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <ScrollView style={{ marginBottom: 60 }}>
        <Searchbar
          style={{ marginHorizontal: 23, marginTop: 20, borderRadius: 30 }}
          placeholder="Search"
          value={search}
          onChangeText={(text) => searchFilter(text)}
        />
        <FlatList
          data={filterData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={ItemView}
        />

      </ScrollView>
      <AdMobBanner
        style={styles.bottomBanner}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  qnsbtn: {
    marginTop: 20,
    marginBottom: 10,
    marginHorizontal: 25,
    padding: 25,
    backgroundColor: '#fff',
    color: '#fff',
    elevation: 4
  },
  bottomBanner: {
    position: "absolute",
    bottom: 0
  },
  interstitialBanner: {
    width: "100%",
    marginLeft: 0
  },
  itemStyle: {
    padding: 15
  }
})

