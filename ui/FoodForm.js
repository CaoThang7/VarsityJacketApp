import React from 'react';
import {
    StyleSheet,
    View,
    TextInput,
    Text,
    Button
} from 'react-native';
import GridList from '../ui/GridList';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { addFood } from '../screensAdmin/FoodsApi';
// import { addFood} from '../screensAdmin/FoodsApi';


const FoodForm = (props) => {
    console.log(props);
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.longFormInput}
                onChangeText={text => {props.setFieldValue('name', text) }}
                placeholder="Name"
            />
            <Text style={styles.validationText}>{props.errors.name}</Text>
            <TextInput
                style={styles.longFormInput}
                onChangeText={text => {props.setFieldValue('category', text) }}
                placeholder="Category"
            />
             <Text style={styles.validationText}>{props.errors.category}</Text>
            <View style={styles.row}>
                <TextInput
                    style={styles.formInput}
                    onChangeText={text => {props.setSubIngredients(text)}}
                    placeholder="Sub"
                />
                <Button
                    // style={}
                    title="Add"
                    onPress={() => {props.submitSubIngredients()}}
                />
            </View>
            <GridList
            items={props.ingredientArray}
            />
            <Button
            title='submit'
            onPress={()=>props.handleSubmit()}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    row: {
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 32
    },
    container: {
        width: 300,
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: 32,
    },
    formInput: {
        borderColor: '#B5B4BC',
        borderWidth: 1,
        padding: 8,
        height: 50,
        color: 'black',
        width: '75%',
        marginBottom: 16,
        marginTop: 16
      },
    validationText: {
        color: 'red'
    },
    longFormInput: {
        width: '100%',
        height: 50,
        color: 'black',
        borderColor: '#B5B4BC',
        borderWidth: 1,
        padding: 8,
        margin: 16
    },
});


export default withFormik({
    mapPropsToValues:()=>({name:'',category:''}),
    validationSchema:(props)=> yup.object().shape({
       name:yup.string().max(30).required(),
       category:yup.string().max(15).required(),

    }),
    handleSubmit:(values,{props})=>{
       console.log(values);
       console.log(props);

       values.subIngredients=props.ingredientArray;
       console.log(values);
       addFood(values,props.onFoodAdded)
    },
})(FoodForm);



// export default FoodForm;