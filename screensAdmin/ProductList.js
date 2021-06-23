import React, { useContext, useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Dimensions
} from 'react-native';
import database from '@react-native-firebase/database';
import { FlatList } from 'react-native-gesture-handler';
import ActionButton from 'react-native-action-button';
var { height, width } = Dimensions.get('window');

// const DATA = [
//     {
//         "proImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18ARPQhhOqcaPTmpSkQUIuts4Zmp1ep9ZCW_0RVxnVTSF6Z-e5-uTVxy0d9dpIVaFjyM7sMZ6&usqp=CAc",
//         "proName": "abc",
//         "proPrice": 123
//     },
//     {
//         "proImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18ARPQhhOqcaPTmpSkQUIuts4Zmp1ep9ZCW_0RVxnVTSF6Z-e5-uTVxy0d9dpIVaFjyM7sMZ6&usqp=CAc",
//         "proName": "abc",
//         "proPrice": 123
//     },
//     {
//         "proImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR18ARPQhhOqcaPTmpSkQUIuts4Zmp1ep9ZCW_0RVxnVTSF6Z-e5-uTVxy0d9dpIVaFjyM7sMZ6&usqp=CAc",
//         "proName": "abc",
//         "proPrice": 123
//     },

// ]

const ProductList = ({ navigation }) => {
    const [data, setData] = useState([]);
    const [proItem, setproItem] = useState({});
    const [stut, setStut] = useState('');

    useEffect(() => {
        const getData = async () => {
            await database().ref("/Products")
                .on('value', snapshot => {
                    console.log("data", snapshot.val());
                    let arr = [];
                    snapshot.forEach(element => {
                        let temp = {
                            proId: element.key,
                            proName: element.val().proName,
                            proImage: element.val().proImage,
                            proPrice: element.val().proPrice,
                        }
                        arr.push(temp);
                    });
                    console.log("arr:", arr);
                    setData(arr);
                });
        }

        getData();
    }, [])

    const hozViewItem = (props) =>
    (<View style={styles.divFood}>
        <Image
            resizeMode='center'
            style={styles.imgView}
            source={{ uri: props.proImage }}
        />
        <Text style={styles.textname}>{props.proName}</Text>
        <Text>{props.proPrice}</Text>
        {/* <TouchableOpacity onPress={()=> {
            console.log("props:",props);
            setStut(1);
            setproItem(props);
            fUpdate()}}> */}
        <View style={styles.btnContainer}>
            <TouchableOpacity style={{ margin: 10 }} onPress={() => { fUpdate('1', props) }}>
                <Text >Update</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ margin: 10 }} onPress={() => { fDelete(props.proId) }}>
                <Text >DELETE</Text>
            </TouchableOpacity>
        </View>
    </View>);
    const fInsert = () =>
        navigation.navigate("ProductDetail", { status: stut });


    const fUpdate = (stut, proItem) => {
        console.log("proItem:", proItem);
        navigation.navigate("ProductDetail", {
            status: stut,
            proValue: proItem
        });
    }

    const fDelete = async (id) => {
        try {
            await database().ref(`/Products/${id}`).remove();
        } catch (e) {
            Alert.alert("Loi" + e)
            console.log("error", e)
        }
    }

    return (
        <View>
            <TouchableOpacity onPress={() => { fInsert('0') }}>
                <Text style={styles.textInsert} >INSERT</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
                <Text style={styles.textInsert} >Logout</Text>
            </TouchableOpacity>
            <FlatList
                data={data}
                // horizontal
                numColumns={2}
                renderItem={({ item }) => hozViewItem(item)}
            />
        </View>
    );



}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    viewItem: {
        width: 100,
        height: 100,
        backgroundColor: "green",
        margin: 5,
    },
    imgView: {
        borderRadius: 7,
        width: 100,
        height: 100,
    },
    divFood: {
        width: (width / 2) - 20,
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
        marginBottom: 5,
        marginLeft: 10,
        alignItems: 'center',
        elevation: 8,
        shadowOpacity: 0.3,
        shadowRadius: 50,
        backgroundColor: 'white',
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
        textAlign: 'center',
    },
    btnContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
    textname: {
        fontSize: 17,
        margin: 5,
        color: 'red'
    }
});


export default ProductList;



