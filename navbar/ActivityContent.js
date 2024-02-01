import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

class ActivityContent extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <           TouchableOpacity style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <MaterialIcons name="sync" size={30} color="#4CAF50" />
                    <Text style={{ marginLeft: 10 }}>Aktivite Kaydı</Text>
                </TouchableOpacity>
            </View>

        );
    }
}

const styles = StyleSheet.create({


});

export default ActivityContent;
