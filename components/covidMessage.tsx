import { Text, View } from "react-native";

export default function CovidMessage(){
    return(
        <View style={{
            backgroundColor:'#2b80ff',
            padding:10,
            borderTopLeftRadius:10,
            borderTopRightRadius:10
        }}>
            <Text style={{
            color:'white',
            fontSize:20,
            fontWeight:'bold',
            marginBottom:10
        }}>Travel only if necessary</Text>
            <Text style={{
            color:'white',
            fontSize:15,
            marginBottom:10
        }}>
                I am writing to express my interest in the forecourt cashier position at Redan. I am a young 
                man of 24 years old and I do not have direct experience in this role but I am eager to commit 
                and learn.  
            </Text>
            <Text style={{
            color:'#fff',
            fontSize:15,
            fontWeight:'bold',
        }}>Learn More</Text>
        </View>
    )
}