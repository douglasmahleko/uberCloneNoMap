import { Entypo, MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";


export default function HomeScreen(){
    return(
        <View>
            <View style={{
                flexDirection:'row',
                alignItems:'center',
                justifyContent:'space-between',
                margin:10,
                padding:10,
                backgroundColor:'#e7e7e7'
            }}>
                <Text style={{
                fontSize:20,
                fontWeight:'bold',
                color:'#535353'
            }}>Where To?</Text>
            
                <View style={{
                    flexDirection:'row',
                    width:100,
                    padding:10,
                    backgroundColor:'#fff',
                    justifyContent:'space-between',
                    borderRadius:20
                }}>
                    <MaterialCommunityIcons name="clock-time-two" size={16} color="#535353" />
                    <Text style={{
                        fontWeight:'600',
                        color:'#434343'
                    }}>Now</Text>
                    <MaterialIcons name="keyboard-arrow-down" size={16} color="black" />
                </View>
            </View>
            <TouchableOpacity onPress={() => router.push({pathname:'/destinationSearch', params:{val:'Spin Nightclub'}})} style={{
                        padding:20,
                        flexDirection:'row',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderColor:'#dbdbdb'
                    }}>
                <View style={{
                        padding:10,
                        backgroundColor:'#b3b3b3',
                        borderRadius:25
                    }}>
                    <MaterialCommunityIcons name="clock-time-two" size={16} color="#ffffff" />
                </View>
                <Text style={{
                        marginLeft:10,
                        fontWeight:'600',
                        fontSize:16
                    }}>Spin Nightclub</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => router.push({pathname:'/destinationSearch', params:{val:'Home'}})} style={{
                        padding:20,
                        flexDirection:'row',
                        alignItems:'center',
                        borderBottomWidth:1,
                        borderColor:'#dbdbdb'
                    }}>
                <View style={{
                        padding:10,
                        backgroundColor:'#218cff',
                        borderRadius:25
                    }}>
                    <Entypo name="home" size={16} color="#ffffff" />
                </View>
                <Text style={{
                        marginLeft:10,
                        fontWeight:'600',
                        fontSize:16
                    }}>Home</Text>
            </TouchableOpacity>
        </View>
    )
}