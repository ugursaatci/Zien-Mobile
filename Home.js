import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView,Image } from 'react-native';
import Index from './Index';
import { Foundation,Octicons,MaterialCommunityIcons  } from '@expo/vector-icons';


class Home extends Component {
  render() {
    return (
      <Index>
        <ScrollView style={{ flex: 1 }}>
          <View style={styles.pageName}>
            <Foundation name="home" size={24} color="black" />
            <Text style={styles.PageNameText}>Anasayfa</Text>
          </View>
          <View style={styles.boxes}>
            <View style={[styles.box,{backgroundColor:'#ff8996'}]}>
              <View style={styles.textArea}>
                <Text style={styles.textHeader}>Toplam Kamera Sayısı</Text>
                <View style={styles.subTextArea}>
                  <Text style={styles.textSub}>200</Text>
                  <Octicons name="graph" size={24} color="white" />
                </View>
              </View>
              <View style={styles.boxCircle}>
              <Image source={require('./assets/circle.png')} style={styles.image}/>
              </View>
            </View>
            <View style={[styles.box,{backgroundColor:'#3398e8'}]}>
              <View style={styles.textArea}>
                <Text style={styles.textHeader}>Aktif Kamera Sayısı</Text>
                <View style={styles.subTextArea}>
                  <Text style={styles.textSub}>174</Text>
                  <Octicons name="graph" size={24} color="white" />
                </View>
                <Text style={[styles.textHeader,{fontSize:16}]}>%92 Aktif Oranı</Text>
              </View>
              <View style={styles.boxCircle}>
              <Image source={require('./assets/circle.png')} style={styles.image}/>
              </View>
            </View>
            <View style={[styles.box,{backgroundColor:'#34d1bb'}]}>
              <View style={styles.textArea}>
                <Text style={styles.textHeader}>Son Etkinlik</Text>
                <View style={styles.subTextArea}>
                  <Text style={styles.textSub}>Yangın Tespiti</Text>
                  <MaterialCommunityIcons name="progress-clock" size={24} color="white" />
                </View>
                <Text style={[styles.textHeader,{fontSize:16}]}>01.02.2024</Text>
              </View>
              <View style={styles.boxCircle}>
              <Image source={require('./assets/circle.png')} style={styles.image}/>
              </View>
            </View>
          </View>
          <View style={styles.graphs}>

          </View>
          
        </ScrollView>
      </Index>
    );
  }
}

const styles = StyleSheet.create({
  pageName:{
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    justifyContent:'space-between',
    width:120
  },
  PageNameText:{
    fontSize:16,
    fontWeight:'bold'
  },
  boxes:{
    justifyContent:'center',
    padding:20
  },
  box:{
    height:200,
    marginTop:20,
    borderRadius:6,
    flexDirection:'row'
   
    
  },
  boxCircle:{
    flex: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 
  
  },
  image:{
    height: 210, 
    width:150,
    resizeMode: 'cover',
    
  },
  textArea:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      marginLeft:10,
      
     
  },
  subTextArea:{
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    justifyContent:'space-between',
    width:80
  },
  textHeader:{
    color:'white',
    fontWeight:'bold',
    fontSize:20
  },
  textSub:{
    color:'white',
    fontWeight:'bold',
    fontSize:16
  },
  graphs:{

  }
})

export default Home;
