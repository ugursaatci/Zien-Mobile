import React, { useState, useRef, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, Animated } from 'react-native';
import { MaterialIcons,FontAwesome, Ionicons,Foundation, AntDesign  } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';



const SidebarContent = () => {
  const navigation = useNavigation();
  
  //Settings
  const [settingsVisible, setSettingsVisible] = useState(false);
  const settingsHeight = useRef(new Animated.Value(0)).current;
  const toggleSettings = () => {
    // State'in mevcut değerinin tersini kullanarak son değeri belirleyin
    const finalValue = settingsVisible ? 0 : 200;
  
    // Ayarlar panelini açmak veya kapatmak için animasyon
    Animated.timing(settingsHeight, {
      toValue: finalValue,
      duration: 300,
      useNativeDriver: false, // Layout animasyonları için false olmalıdır
    }).start();
  
    // State güncellemesini animasyon başladıktan sonra yapın
    setSettingsVisible(!settingsVisible);
  };

  return (
    <ScrollView style={styles.sidebar}>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
        <View style={{flex:8}}><Text style={styles.menuItemText}>Anasayfa</Text></View>
        <View><Foundation name="home" size={24} color="black" style={styles.icon} /></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Notifications')}>
        <View style={{flex:8}}><Text style={styles.menuItemText}>Bildirimler</Text></View>
        <View><MaterialIcons name="notifications-active" size={24} color="black" style={styles.icon} /></View>
      </TouchableOpacity>

      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Cameras')}>
        <View style={{flex:8}}><Text style={styles.menuItemText}>Kameralar</Text></View>
        <View><FontAwesome name="video-camera" size={24} color="black" style={styles.icon}/></View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={toggleSettings}>
        <View style={{flex:8}}><Text style={styles.menuItemText}>Ayarlar</Text></View>
        <View style={{flexDirection:'row'}}>
          <AntDesign name="down" size={18} color="black" style={{alignItems:'center', justifyContent:'center'}} />
          <Ionicons name="settings-sharp" size={24} color="black" style={styles.icon}/>
        </View>
      </TouchableOpacity>
      <Animated.View style={[styles.settingsPanel, { height: settingsHeight }]}>
        {/* Ayarlar içeriği*/}
        <View>
        <View>
          <Text style={styles.subText}>Kullanıcı Ayarları</Text>
          <View style={styles.line}></View>
          <TouchableOpacity style={{alignItems:'center',marginTop:10}}>
            <View style={styles.settingsButton}>
              <Text style={{fontSize:16, color:'green'}}>+ Kullanıcı Ekle</Text>
          </View>
        </TouchableOpacity>
        </View>
        
        <View style={{marginTop:10}}>
          <Text style={styles.subText}>Kamera Ayarları</Text>
          <View style={styles.line}></View>
          <TouchableOpacity style={{alignItems:'center',marginTop:10}}>
            <View style={styles.settingsButton}>
              <Text style={{fontSize:16, color:'green'}}>+ Kamera Ekle</Text>
          </View>

        </TouchableOpacity>
        </View>
        </View>
       

      </Animated.View>
   
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  sidebar: {
    padding: 10,
    backgroundColor: '#fff',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center', 
    paddingVertical: 10,
    
  },
  menuItemText: {
    flex: 1, 
    marginLeft: 10,
    fontSize: 16,
  },
  icon:
  {
    height:50
  },
  settingsPanel:{
    backgroundColor: '#fff',
    justifyContent:'center'
  },
  line:{
    height:0.5,
    backgroundColor:'gray',
    marginTop:3
  },
  subText:{
    textAlign:'center',
    fontSize:16,
    fontWeight:'bold'
  },
  settingsButton:{
    width: 120,
    height: 50,
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 4,
    alignItems:'center',
    justifyContent:'center'
    
    
  }
});

export default SidebarContent;
