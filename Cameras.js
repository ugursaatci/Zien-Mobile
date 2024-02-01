import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Index from './Index';

class Cameras extends Component {
  render() {
    return (
      <Index>
        {/* Burada Index bileşenin içerisine ekleyeceğiniz içerik yer alacak */}
        <ScrollView style={{ flex: 1 }}>
          <Text>Kameralar</Text>
          

          {/* Diğer içerikler */}
        </ScrollView>
      </Index>
    );
  }
}

export default Cameras;