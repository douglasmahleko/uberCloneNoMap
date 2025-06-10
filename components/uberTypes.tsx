import { Image, Text, View } from "react-native";
import Vehivle from '../assets/images/track.jpeg'
import { Ionicons } from "@expo/vector-icons";

export default function UberTypes({type, duration, price, img}){
    return(
        <View style={{
            flexDirection:'row',
            alignItems:'center',
            justifyContent:'space-between',
            padding:20
            }}>
            <Image source={img} style={{
                height:70,
                width:80,
                borderRadius:20,
                resizeMode:'contain'
            }} />
            <View style={{
                flex:1,
                marginHorizontal:10,
                justifyContent:'space-between'
            }}>
                <Text style={{
                    fontWeight:'bold',
                    fontSize:18,
                    marginBlock:5
                }}>{type} {' '} <Ionicons name="person" size={16} color="black" /> 3</Text>
                <Text style={{
                    color:"#5d5d5d"
                }}>dropoff after {duration} min(s)</Text>
            </View>
            <View style={{
                width:100,
                flexDirection:'row',
                justifyContent:'flex-end'
            }}>
                <Ionicons name="pricetag" size={16} color="#42d742" />
                <Text style={{
                    fontWeight:'bold',
                    marginLeft:5,
                    fontSize:13
                }}>est. ${price}</Text>
            </View>
        </View>
    )
}