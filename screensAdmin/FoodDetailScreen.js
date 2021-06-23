import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Alert,
  Image,
  Button
} from 'react-native';
import { Divider, Icon } from 'react-native-elements';
import { deleteFood } from '../screensAdmin/FoodsApi';

class FoodDetailScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      title: "DetailScreen",
      headerRight: (
        <Button
          title="Edit"
          onPress={() => { }}
        />
      )
    }
  };



  render() {
    return (
      <View style={styles.container}>
        <Button
          title="Edit"
          onPress={() => { this.props.navigation.navigate('FoodFormScreen') }}
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 32,
    marginBottom: 32
  },
  image: {
    width: '100%',
    aspectRatio: 2,
    marginBottom: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 16,
    paddingLeft: 16,
    paddingRight: 16
  },
  categoryText: {
    fontSize: 20,
    marginBottom: 32
  },
  ingredientText: {
    fontStyle: 'italic',
    fontSize: 18,
    marginBottom: 32
  },
  ingredientItemText: {
    fontSize: 16,
    alignSelf: 'center',
    marginBottom: 16,
    marginTop: 16
  },
  container: {
    alignItems: 'center'
  },
  listContainer: {
    borderWidth: 0.5,
    width: 200,
    borderColor: 'grey'
  }
});

export default FoodDetailScreen;

