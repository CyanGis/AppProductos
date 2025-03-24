import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { Image, Card} from '@rneui/base';

export default function CardListProducts(props){
    const{imagen, nombre, descripcion, precio, view, navigation} = props;
    return(
        <TouchableOpacity 
        onPress={navigation.navigate(view ? view : "", {imagen, nombre, descripcion, precio})}>
            <Card>
            <View style={{flexDirection:"row"}}>
                    <Image
                    source={{uri: imagen ? imagen: 'https://placehold.co/128x128.png'}}
                    style={{width: 128, height:128}}
                    />
                    <View style={{flex:1, flexDirection:"column", marginLeft:8}}>
                        <View style={{flexDirection:"row", justifyContent:"space-between"}}>
                        <Text style={{fontWeight:"bold", width: 120}}>
                            {title ? title : ''}
                        </Text>
                        </View>
                        <Text style={{color:'gray'}}>
                            {descripcion ? descripcion : ''}
                        </Text>
                    <Text>{precio? `$${precio}`: 'No disponible'}</Text>
                </View>
            </View>
        </Card>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    },
});