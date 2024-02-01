import React, { useState, useRef, useEffect } from 'react';
import { View, 
  StyleSheet, 
  TouchableOpacity, 
  Image, 
  Animated, 
  Dimensions,
  Text
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import SidebarContent from './navbar/SidebarContent';
import NotificationContent from './navbar/NotificationContent';
import ActivityContent from './navbar/ActivityContent';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Index = ({ children }) => {
  //Yönlendirme
  const navigation = useNavigation();
  //Sidebar
  const [menuVisible, setMenuVisible] = useState(false);
  const sidebarAnimation = useRef(new Animated.Value(250)).current; // Sidebar animasyonu için başlangıç değeri
  //Notification
  const [notificationsVisible, setNotificationsVisible] = useState(false);
  const notificationHeight = useRef(new Animated.Value(0)).current;
  //Activity Log
  const [activityVisible, setActivityVisible] = useState(false);
  const activityHeight = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Menüyü açmak veya kapatmak için animasyon
    Animated.timing(sidebarAnimation, {
      toValue: menuVisible ? 0 : 250, // Menü açıkken 0, kapalıyken 250 (sidebar genişliği)
      duration: 300, // Animasyon süresi
      useNativeDriver: true, // 'useNativeDriver: true' kullanılıyor
    }).start();
  }, [menuVisible]);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const toggleNotifications = () => {
    // Bildirim panelini açmak veya kapatmak için animasyon
    Animated.timing(notificationHeight, {
      toValue: notificationsVisible ? 0 : 200, // Panel yüksekliği
      duration: 850,
      useNativeDriver: false,
    }).start();

    setNotificationsVisible(!notificationsVisible);
  };
  const toggleActivity = () => {
    // Aktivite panelini açmak veya kapatmak için animasyon
    Animated.timing(activityHeight, {
      toValue: activityVisible ? 0 : 60, // Panel yüksekliği
      duration: 300,
      useNativeDriver: false,
    }).start();

    setActivityVisible(!activityVisible);
  };

  return (
    <View style={{ flex:1, backgroundColor:'#f7f7f7' }}>
      {/* Navbar */}
      <View style={styles.navBar}>
        <View style={styles.navBarLeft}>
          <TouchableOpacity style={{backgroundColor:'#f7f7f7'}} onPress={() => navigation.navigate('Home')}>
            <Image style={styles.logo} source={require('./assets/logo/zienmini.png')} />
            
          </TouchableOpacity>
        </View>
        <View style={styles.navBarRight}>
          <TouchableOpacity style={styles.iconButton}  onPress={toggleActivity} >
            <View style={{flexDirection:'row',alignItems:'flex-end'}}>
            <Image style={styles.icon} source={require('./assets/pic-1.png')}/>
            <AntDesign name="down" size={18} color="black" style={{alignItems:'center', justifyContent:'center'}} />
            </View>
            
          </TouchableOpacity>

          <TouchableOpacity style={styles.iconButton} onPress={toggleNotifications}>
          <MaterialIcons name="notifications" size={30} color="#000" />
        </TouchableOpacity>
        
          <TouchableOpacity style={styles.iconButton} onPress={toggleMenu} >
            <MaterialCommunityIcons name="menu" size={30} color="#000" />
          </TouchableOpacity>
        </View>
      </View>
      {/* Animasyonlu Aktivite Paneli */}
      <Animated.View style={[styles.activityPanel, { height: activityHeight }]}>
        {/* Aktivite Menü içeriği */}
        <ActivityContent/>
      </Animated.View>

      {/* Animasyonlu Bildirim Paneli */}
      <Animated.View style={[styles.notificationPanel, { height: notificationHeight }]}>
        {/* Bildirim içeriği */}
        <NotificationContent/>
      </Animated.View>

      {/* Animasyonlu Sidebar */}
      <Animated.View style={[styles.sidebar, {
        transform: [{ translateX: sidebarAnimation }],
        zIndex:10
      }]}>
        {/* Sidebar içeriği */}
        <View style={styles.sidebarContent}>
          <SidebarContent/>
        </View>
      </Animated.View>
      <View style={styles.content}>
      {children}
      </View>
    </View>
  );
};
 
const styles = StyleSheet.create({
  navBar: {
    position: 'absolute',
    width: '100%',
    zIndex: 1,
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex:20
  },
  navBarLeft: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 5,
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
    height:50
  },
  navBarRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: 10,
    zIndex:20
  },
  logo: {
    width: 50,
    resizeMode: 'contain',
    marginHorizontal: 5,
    backgroundColor:'#f7f7f7'
  },
  iconButton: {
    marginLeft: 10,
    zIndex:10
    
  },
  sidebar: {
    position: 'absolute',
    
    top: 0,
    bottom: 0,
    right: 0,
    width: 250,
    backgroundColor: '#fff',
    
    
  },
  sidebarContent:{
    marginTop:100,
    zIndex:10
  },
  notificationPanel: {
    position: 'absolute',
    top: 90, 
    backgroundColor: '#fff',
    right:30,
    left:30,
    borderRadius:6,
    justifyContent:'center',
    zIndex:10
    
    
  },
  activityPanel: {
    position: 'absolute',
    top: 90, 
    backgroundColor: '#fff',
    right:30,
    left:30,
    borderRadius:6,
    justifyContent:'center',
    zIndex:10
    
  },
  content: {
    flex: 1, 
    marginTop:100,
    zIndex:1,
    backgroundColor:'#f2edf3'
    
  },
  menuButton:{
    position: 'absolute',
    zIndex: 20,
  }


});

export default Index;