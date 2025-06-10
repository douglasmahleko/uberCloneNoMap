import HomeMap from "@/components/homeMap";
import UberTypes from "@/components/uberTypes";
import { FlatList, Pressable, Text, View } from "react-native";
import Vehivle from '../../assets/images/erp.jpeg'
import Vehivle1 from '../../assets/images/cur.jpg'
import Vehivle2 from '../../assets/images/track.jpeg'

const data = [
    {
        id:'0',
        type:'UberX',
        price:14,
        duaration:30,
        img:Vehivle
    },
    {
        id:'1',
        type:'Camfort',
        price:22,
        duaration:40,
        img:Vehivle1
    },
    {
        id:'2',
        type:'UberX',
        price:22,
        duaration:30,
        img:Vehivle2
    }
]

export default function Result(){
    return(
        <View>
            <HomeMap />
            {
                data.map(value => (
                    <UberTypes key={value.id} type={value.type} img={value.img} duration={value.duaration} price={value.price} />
                ))
            }
            <Pressable style={{
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
            }}>Confirm Uber</Text>
            </Pressable>
        </View>
    )
}