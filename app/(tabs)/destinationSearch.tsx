import { Pressable, TextInput, TouchableOpacity } from 'react-native';
import { Text, View } from '@/components/Themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { router } from 'expo-router';
import { useRoute } from '@react-navigation/native';

export default function DestinationSearch() {
  const dest = useRoute()
  const values = dest.params
  const [from,setFrom] = useState('')
  const [to,setTo] = useState(values.val)
  return (
    <SafeAreaView>
      <View style={{
        padding:10,
        height:'100%'
      }}>
        <TextInput placeholder='From' value={from} style={{
          padding:10,
          backgroundColor:'#eee',
          marginVertical:5
          
        }} onChangeText={(text) => setFrom(text)} />
        <TextInput placeholder='Where To?' value={to} style={{
          padding:10,
          backgroundColor:'#eee',
          marginVertical:5
        }} onChangeText={(text) => setTo(text)} />
        {/* <GooglePlacesAutocomplete
          placeholder='Search'
          onPress={(data, details = null) => {
            console.log(data, details);
          }}
          query={{
            key: '',
            language: 'en',
          }}
        /> */}
        <Pressable onPress={() => router.push({pathname:'/result', params:{to:to, from:from}})} style={{
                      backgroundColor:'black',
                      width:'90%',
                      padding:10,
                      margin:10,
                      marginLeft:20,
                      alignItems:'center',
                  }}>
                      <Text style={{
                          color:'white',
                          fontWeight:'bold'
                  }}>Determine Uber</Text>
        </Pressable>
      </View>
      
    </SafeAreaView>
  );
}


