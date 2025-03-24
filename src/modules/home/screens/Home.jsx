import { StyleSheet, Text, View, FlatList } from "react-native";
import React, {useEffect, useState} from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../kernel/utils/FirebaseConnection";
import CardListProducts from "../../../kernel/components/CardListProducts";

export default function Home(){
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        (async()=>{
            const arrayProductos = [];
            const querySnapshot = await getDocs(collection(db, "productos"));
            querySnapshot.forEach((doc) => { 
            const data = doc.data();
            data.id = doc.id;
            arrayProductos.push(data);
            });
            setProductos(arrayProductos);
            setLoading(false);
        })();
    },[]);
    return(
        <View style={styles.container}>
            <FlatList
            data={productos}
            renderItem={({item})=>(
                <CardListProducts
                imagen={item.imagen}
                nombre={item.nombre}
                descripcion={item.descripcion}
                precio={item.precio}
                />
            )}
            keyExtractor={(item)=>item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#fff',
    }
})