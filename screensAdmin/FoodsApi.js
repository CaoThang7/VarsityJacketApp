import firestore from '@react-native-firebase/firestore';


export function addFood(food, addComplete) {
  food.createdAt = firestore.Timestamp.fromDate(new Date());
  firestore()
    .collection('Foods')
    .add(food)
    .then((snapshot) => snapshot.get()
    ).then((foodData) => addComplete(foodData.data()))
    .catch((error) => console.log(error));

}

// {
//   name:food.name,
//   color:food.color,
//   createdAt: firestore.Timestamp.fromDate(new Date()),
// }

export async function getFoods(foodsRetreived) {

  var foodList = [];

  var snapshot = await firestore()
    .collection('Foods')
    .orderBy('createdAt')
    .get()

  // snapshot.forEach((doc) => {
  //   const foodItem = doc.data();
  //   foodItem.id = doc.id;
  //   foodList.push(foodItem);
  // });

  snapshot.forEach((doc) => {
    foodList.push(doc.data());
  });

  console.log(foodList);

  foodsRetreived(foodList);
}



