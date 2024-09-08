import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { ScrollView } from 'react-native';

interface SettingsScreenProps {
  profileImageUrl?: string; 
}

const ProfileScreen: React.FC<SettingsScreenProps> = ({ profileImageUrl }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ fontSize: 36, fontWeight: 'bold', marginBottom: 20 }}>Profile</Text>
      <Pressable style={({ pressed }) => [styles.profileContent, pressed && { backgroundColor: '#e0e0e0' }, ]} onPress={() => setModalVisible(true)}>
        <View style={styles.profileContent}>
          <Image
            source={
              profileImageUrl ? { uri: profileImageUrl }
              : require('../../assets/default-profile.png')
            }
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.userName}>Manjot Sandhu</Text>
            <Text style={{ color: '#707070' }}>Show profile</Text>
          </View>
          <Text style={styles.Profilearrow}>{'>'}</Text>
        </View>
      </Pressable>
      <View style={styles.line}></View>
      <View style={{paddingVertical: 20}}>
        <Text style={{fontSize: 24, fontWeight: 500}}>Settings</Text>
      </View>
      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='person-circle-outline' size={32} color='#555' style={{paddingRight: 10}}></Ionicons>
          <Text>Personal Information</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='shield' size={24} color='#555' style={{paddingRight: 14, paddingLeft: 4}}></Ionicons>
          <Text>Passwords and Security</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='notifications' size={24} color='#555' style={{paddingRight: 14, paddingLeft: 4}}></Ionicons>
          <Text>Notifications</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='receipt-outline' size={24} color='#555' style={{paddingRight: 14, paddingLeft: 4}}></Ionicons>
          <Text>Past Orders</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>
      

      <View style={{paddingVertical: 20}}>
        <Text style={{fontSize: 24, fontWeight: 500}}>More info & Support</Text>
      </View>
      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='help-circle-outline' size={28} color='#555' style={{paddingRight: 12, paddingLeft: 2}}></Ionicons>
          <Text>Help</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>
      
      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='person' size={24} color='#555' style={{paddingRight: 14, paddingLeft: 4}}></Ionicons>
          <Text>Acount Status</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='document-text-outline' size={24} color='#555' style={{paddingRight: 14, paddingLeft: 4}}></Ionicons>
          <Text>Report an Issue</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='information-circle-outline' size={28} color='#555' style={{paddingRight: 12, paddingLeft: 2}}></Ionicons>
          <Text>About</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>
      
      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' } ]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='pencil-outline' size={24} color='#555' style={{paddingRight: 14, paddingLeft: 4}}></Ionicons>
          <Text>Give Us Feedback</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>


      <View style={{paddingVertical: 20}}>
        <Text style={{fontSize: 24, fontWeight: 500}}>Legal</Text>
      </View>
      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' }]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='document-outline' size={28} color='#555' style={{paddingRight: 12, paddingLeft: 2}}></Ionicons>
          <Text>Terms of Service</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' }]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='document-outline' size={28} color='#555' style={{paddingRight: 12, paddingLeft: 2}}></Ionicons>
          <Text>Privacy Policy</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={({ pressed }) => [styles.settingsTabs, pressed && { backgroundColor: '#e0e0e0' }]} onPress={ () => router.push('/screens/PersonalScreen')}>
        <View style={styles.settingsTabs}>
          <Ionicons name='document-outline' size={28} color='#555' style={{paddingRight: 12, paddingLeft: 2}}></Ionicons>
          <Text>Open Source Liscence</Text>
        </View>
        <Text style={styles.arrow}>{'>'}</Text>
      </Pressable>
      <View style={styles.line}></View>

      <Pressable style={{paddingVertical: 10, width: 80, left: -10}} onPress={() => router.push('/screens/PersonalScreen')}>
      {({ pressed }) => (
        <Text style={[{ fontSize: 20, textDecorationLine: 'underline', left: 10}, pressed && {color: '#1E90FF'}]}>Logout</Text>
      )}
      </Pressable>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
      <View style={styles.modalBackground}>
        <View style={styles.modalContent}>
        <Pressable style={({ pressed }) => [ styles.closeModal, pressed && { backgroundColor: '#e0e0e0' }, ]} onPress={() => setModalVisible(false)} >
            <Text style={{ fontSize: 18, color: '#000' }}>X</Text>
          </Pressable>
          <View style={{ alignItems: 'center', justifyContent: 'center' }}>
            <View style={styles.profileCard}>
              <Image
              source={
                profileImageUrl ? { uri: profileImageUrl }
                : require('../../assets/default-profile.png')
              }
              style={styles.modalProfileImage}
              />
              <Text style={styles.userName}>Manjot Sandhu</Text>
              <Text style={{fontSize: 18, color: '#707070' }}>Traveler</Text>
            </View>
          </View>
        </View>
      </View>  
      </Modal>


    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    position: 'absolute',
    paddingTop: 80,
    paddingBottom: 30,
    left: 20,
    width: '100%',
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#f0f0f0', 
  },
  profileContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1, 
    paddingTop: 10,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15, 
  },
  userName: {
    fontSize: 24,
    fontWeight: 'bold',
    flexShrink: 1,
  },
  line: {
    width: '90%',
    height: 1,
    backgroundColor: '#ccc', 
    marginVertical: 10, 
  },
  arrow: {
    fontSize: 24,
    color: '#000', 
    right: 40,
  },
  Profilearrow: {
    position: 'absolute',
    fontSize: 32,
    color: '#000', 
    right: 40,
  },
  settingsTabs: {
    paddingVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    height: '90%',
  },
  closeModal: {
    top: -5,
    left: -5,
    padding: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileCard: {
    top: 20,
    width: "90%",
    height: 225,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ECECEC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    backgroundColor: '#F0F0F0'
  },
  modalProfileImage: {
    top: 10,
    width: 125,
    height: 125,
    borderRadius: 62.5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 10,
  },
});

export default ProfileScreen;
