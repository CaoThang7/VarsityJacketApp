import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    TextInput, Alert,
    Button
} from 'react-native';
import database from '@react-native-firebase/database';
const ShopDetail = ({ route, navigation }) => {
    const { status, proValue } = route.params;
    console.log("status:", status);
    console.log("proValue:", proValue);
    const [id, setId] = useState('');
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');


    const fsave = async () => {
        let proItem = {
            proName: name,
            proImage: image,
            proPrice: price,
        }
        try {
            if (status == 0) {
                await database().ref("/Products").push(proItem);
            } else {
                await database().ref(`/Products/${id}`).set(proItem);
                //Cach 2
                // await database().ref("/Products/"+id).set(proItem);
            }
            navigation.navigate("ProductList")
        } catch (e) {
            Alert.alert("Loi" + e)
            console.log("error", e)
        }
    }
    useEffect(() => {
        if (status === '1') {
            setId(proValue.proId);
            setImage(proValue.proImage);
            setName(proValue.proName);
            setPrice(proValue.proPrice);
            console.log("id:", id)
        }
    }, [])
    return (
        <View style={styles.container}>
            {/* <TextInput
                placeholder="Enter Name"
                value={id}
                onChangeText={(text) => setId(text)}
            /> */}
            <Image
                source={{ uri: image }}
                style={styles.logo}
            />
            <View style={styles.action}>
                <TextInput
                    placeholder="Enter Name"
                    value={name}
                    onChangeText={(text) => setName(text)}
                    style={styles.longFormInput}
                />
            </View>

            {/* <View style={styles.action}>
                <TextInput
                    placeholder="Enter imge"
                    value={image}
                    onChangeText={(text) => setImage(text)}
                    style={styles.longFormInput}
                />
            </View> */}
            <View style={styles.action}>
                <TextInput
                    placeholder="Enter Price"
                    value={price}
                    onChangeText={(text) => setPrice(text)}
                    style={styles.longFormInput}
                />
            </View>

            <View style={styles.action}>
                <Button
                    title="Check out"
                />
            </View>

        </View>
    );
}



const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        paddingTop: 50
    },
    logo: {
        height: 200,
        width: 200,
        resizeMode: 'cover',
    },
    text: {
        fontFamily: 'Kufam-SemiBoldItalic',
        fontSize: 28,
        marginBottom: 10,
        color: '#051d5f',
    },
    navButton: {
        marginTop: 15,
    },
    forgotButton: {
        marginVertical: 35,
    },
    navButtonText: {
        fontSize: 18,
        fontWeight: '500',
        color: '#2e64e5',
        fontFamily: 'Lato-Regular',
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -14,
        paddingLeft: 10,
        color: '#333333',
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#fff',
        paddingBottom: 0,
    },
    longFormInput: {
        width: '100%',
        height: 50,
        color: 'black',
        borderColor: '#B5B4BC',
        borderWidth: 1,
        padding: 8,
        margin: 10
    },
    textInsert: {
        color: 'yellow',
        height: 30,
        width: 100,
        backgroundColor: 'black',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        borderRadius: 5,
        textAlign: 'center'
    }
});

export default ShopDetail;