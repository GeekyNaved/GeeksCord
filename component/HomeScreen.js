import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { List, Card, Button } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import {
  AdMobBanner, AdMobInterstitial
} from 'expo-ads-admob';

export default function HomeScreen({ navigation }) {
  const [filterData, setfilterData] = useState([])
  const [masterData, setMasterData] = useState([])
  useEffect(() => {
    fetchCourse();
  }, [])
  const fetchCourse = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then((responseJSON) => {
        setfilterData(responseJSON)
        setMasterData(responseJSON)
        console.log(responseJSON)
      }).catch((error) => {
        console.error(error);
      })
  }
  const course = [
    {
      id: '1',
      title: 'Web Developer Roadmap',
      link1: 'https://www.youtube.com/watch?v=t6Fzrje4Irs&ab_channel=CodeWithHarry',
      link2: 'https://youtu.be/ozh5WMot6io'
    },
    {
      id: '2',
      title: 'Web Developement Course',
      link1: 'https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg',
      link2: 'https://youtu.be/Q33KBiDriJY'
    },
    {
      id: '3',
      title: 'HTML',
      link1: 'https://youtu.be/BsDoLVMnmZs',
      link2: 'https://youtu.be/UB1O30fR-EE'
    },
    {
      id: '4',
      title: 'CSS course',
      link1: 'https://youtu.be/u5-K_ua9sOw',
      link2: 'https://youtu.be/1Rs2ND1ryYc'
    },
    {
      id: '5',
      title: 'Javascript course',
      link1: 'https://youtu.be/hKB-YGF14SY',
      link2: 'https://youtu.be/hdI2bqOjy3c'
    },
    {
      id: '6',
      title: 'Bootstrap course',
      link1: 'https://youtu.be/008dZPBZtLQ',
      link2: 'https://youtu.be/hnCmSXCZEpU'
    },
  ]
  return (

    <View>
      <ScrollView style={{ marginBottom: 60 }}>
        {
          course.map((item, key) => (
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
          ))
        }
        {/* <Card style={styles.qnsbtn} onPress={() => {
          navigation.navigate('Details', {
            hindi: "https://www.youtube.com/watch?v=t6Fzrje4Irs&ab_channel=CodeWithHarry",
            english: 'https://youtu.be/ozh5WMot6io',
          });

        }}>
          <List.Item
            title="Web Developer Roadmap"
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>

        <Card style={styles.qnsbtn}
          onPress={() => {
            navigation.navigate('Details', {
              hindi: "https://youtube.com/playlist?list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg",
              english: "https://youtu.be/Q33KBiDriJY",
            });
          }}
        >
          <List.Item
            title="Web Developement Course"
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>

        <Card style={styles.qnsbtn}>
          <List.Item
            title="HTML Course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/BsDoLVMnmZs",
                english: "https://youtu.be/UB1O30fR-EE",

              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>




        <Card style={styles.qnsbtn}>
          <List.Item
            title="CSS Course "
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/u5-K_ua9sOw",
                english: 'https://youtu.be/1Rs2ND1ryYc',
              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>


        <Card style={styles.qnsbtn}>
          <List.Item
            title="Javascript Course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/hKB-YGF14SY",
                english: "https://youtu.be/hdI2bqOjy3c",
              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>



        <Card style={styles.qnsbtn}>
          <List.Item
            title="Bootstrap Course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/008dZPBZtLQ",
                english: "https://youtu.be/hnCmSXCZEpU",

              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>






        <Card style={styles.qnsbtn}>
          <List.Item
            title="Php and MySQL Course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtube.com/playlist?list=PLu0W_9lII9aikXkRE0WxDt1vozo3hnmtR",
                english: 'https://youtube.com/playlist?list=PLillGF-Rfqbap2IB6ZS4BBBcYPagAjpjn',
              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>


        <Card style={styles.qnsbtn}>
          <List.Item
            title="JQuery Course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/YFlx1C8XwR0",
                english: "https://youtu.be/2OMzGhlIZpg",
              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>



        <Card style={styles.qnsbtn}>
          <List.Item
            title="Ajax Course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/FJZEVmF3eDg",
                english: "https://youtu.be/82hnvUYY6QA",

              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>

        <Card style={styles.qnsbtn}>
          <List.Item
            title="React JS Course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtube.com/playlist?list=PLwGdqUZWnOp3aROg4wypcRhZqJG3ajZWJ",
                english: "https://youtu.be/w7ejDZ8SWv8",
              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>


        <Card style={styles.qnsbtn}>
          <List.Item
            title="Node Js course"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/ipnWAKoiBtY",
                english: "https://youtu.be/TlB_eWDSMt4",
              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>

        <Card style={styles.qnsbtn}>
          <List.Item
            title="Express Js Framework"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtu.be/AX1AP83CuK4",
                english: "https://youtu.be/L72fhGm1tfE",

              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card>


        <Card style={styles.qnsbtn}>
          <List.Item
            title="MongoDB"
            onPress={() => {

              navigation.navigate('Details', {

                hindi: "https://youtube.com/playlist?list=PL9mB5ptJ4Ze3zq1tYr5E-YV-Mt6pkdG8i",
                english: 'https://youtu.be/-56x56UppqQ',
              });

            }}
            right={props => <List.Icon {...props} icon="forward" color="#6200ee" />}
          />
        </Card> */}

      </ScrollView>

      <AdMobBanner
        style={styles.bottomBanner}
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" // Test ID, Replace with your-admob-unit-id
        servePersonalizedAds // true or false
      />

    </View>
  );
}

const styles = StyleSheet.create({
  qnsbtn: {
    marginTop: 20,
    marginBottom: 10,
    marginLeft: 25,
    marginRight: 25,
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
  }

})

