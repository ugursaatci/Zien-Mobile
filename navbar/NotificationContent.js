import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5,AntDesign } from '@expo/vector-icons';


const NotificationContent = () => {
    return (
      
        <View style={styles.container}>
          <ScrollView>
          <View>
              <Text style={styles.notificationText}>Bildirimler</Text>
          </View>
          <View style={styles.notificationItem}>
          <AntDesign name="warning" size={24} color="red" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.notificationText}>Yangın Tespiti</Text>
              <Text style={styles.notificationSubText}>30.01.2024</Text>
            </View>
          </View>
          
          <View style={styles.notificationItem}>
          <AntDesign name="warning" size={24} color="yellow" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.notificationText}>Duman Tespiti</Text>
              <Text style={styles.notificationSubText}>29.01.2024</Text>
            </View>
          </View>
    
          <View style={styles.notificationItem}>
          <AntDesign name="warning" size={24} color="purple" style={styles.icon} />
            <View style={styles.textContainer}>
              <Text style={styles.notificationText}>Yanlış Bildirim</Text>
              <Text style={styles.notificationSubText}>28.01.2024</Text>
            </View>
          </View>
          <TouchableOpacity>
            <Text style={styles.seeAllNotifications}>Tüm Bildirimleri Gör</Text>
          </TouchableOpacity>
          </ScrollView>
          
          
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f7f7f7',
        height:180
      },
      notificationItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        marginBottom: 10,
        borderRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      icon: {
        marginHorizontal: 20,
      },
      textContainer: {
        flex: 1,
        justifyContent: 'center',
        marginRight: 20, // This will keep the text from touching the right edge of the item.
      },
      notificationText: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      notificationSubText: {
        fontSize: 14,
        color: '#666',
      },
      seeAllNotifications: {
        textAlign: 'center',
        color: '#0000ff',
        marginTop: 10,
        fontWeight: 'bold',
      }
    });
    

export default NotificationContent;

