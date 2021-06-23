import React, { Component } from 'react';
import {
  StyleSheet,
  Button,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { ListItem, Divider } from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { color } from 'react-native-reanimated';
import { addFood, getFoods } from '../screensAdmin/FoodsApi';
import ActionButton from 'react-native-action-button';

class FoodList extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Food List',
    }
  };

  // colors = [
  //   'red', 'black', 'blue', 'green', 'orange', 'yellow', 'purple'
  // ]

  state = {
    foodList: [],
    currentFoodItem: null,
  }


  onFoodAdded = (food) => {
    this.setState(prevState => ({
      foodList: [...prevState.foodList, food]
    }));
  }

  onFoodsReceived = (foodList) => {
    this.setState(prevState => ({
      foodList: prevState.foodList = foodList
    }));
  }

  componentDidMount() {
    getFoods(this.onFoodsReceived);
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <FlatList
          data={this.state.foodList}
          ItemSeparatorComponent={() => <Divider style={{ backgroundColor: 'black' }} />}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => {
            console.log(item.name);
            return (
              <ListItem
                titleStyle={styles.titleStyle}
                containerStyle={styles.listItem}
                onPress={() => this.props.navigation.navigate('FoodDetailScreen', { food: item })}
              >
                <Text>{item.name}</Text>
                <Text>{item.category}</Text>
              </ListItem>
            );
          }
          }
        />
        <ActionButton
          buttonColor='blue'
          onPress={() => this.props.navigation.navigate("FoodFormScreen")}
        />
      </SafeAreaView>
    );
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listItem: {
    marginTop: 8,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    fontSize: 30
  },
  subtitleStyle: {
    fontSize: 18
  },
  emptyTitle: {
    fontSize: 32,
    marginBottom: 16
  },
  emptySubtitle: {
    fontSize: 18,
    fontStyle: 'italic'
  }
});

export default FoodList;