import { View, Text } from 'react-native';
import React from 'react';
import { Divider } from 'react-native-elements';
import About from '../components/restaurantDetail/About';
import MenuItems from '../components/restaurantDetail/MenuItems';
import ViewCart from '../components/restaurantDetail/ViewCart';

const foods = [
  {
    title: 'Lasagna',
    description: 'With butter letuce, tomato and sauce bechamel',
    price: '$13.50',
    image:
      'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80',
  },
  {
    title: 'Tandoori Chicked',
    description: 'Amazing Indian dish with tenderion chickeon of sizzles',
    price: '$19.50',
    image:
      'https://images.unsplash.com/photo-1617692855027-33b14f061079?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFuZG9vcmklMjBjaGlja2VufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    title: 'Chilaquiles',
    description:
      'Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽',
    price: '$13.50',
    image:
      'https://images.unsplash.com/photo-1650330151304-5db3ca9b3b6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2hpbGFxdWlsZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    title: 'Chicken Casesar Salad',
    description:
      'With butter mayonnaise, red pepper, onion, tomato, cucumber and cheese',
    price: '$14.30',
    image:
      'https://images.unsplash.com/photo-1590520032542-550749c7cd9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNoaWNrZW4lMjBjYWVzYXIlMjBzYWxhZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    title: 'Chicken Tikka',
    description: 'With butter mayonnaise, toamto and sauce bechamel',
    price: '$10.50',
    image:
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2450&q=80',
  },
  {
    title: 'Spaghetti',
    description: 'with premium meat sauce, tomato, onion, garlic and cheese',
    price: '$18.50',
    image:
      'https://media.istockphoto.com/photos/spaghetti-with-tomato-sauce-shot-on-rustic-wooden-table-picture-id1166678093?b=1&k=20&m=1166678093&s=170667a&w=0&h=YiqpSClLnAbe8-2YOElYTFv2F9sbMtLeSpOUYk90neo=',
  },
  {
    title: 'Fried Steak',
    description: 'Steak with butter mayonnaise and seasoning',
    price: '$18.50',
    image:
      'https://images.unsplash.com/photo-1600891964092-4316c288032e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c3RlYWt8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60',
  },
  {
    title: 'Mint Mojitos',
    description: 'Fresh mint and lime juice',
    price: '$10.50',
    image:
      'https://images.unsplash.com/photo-1551024709-8f23befc6f87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1vaml0b3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    title: 'Tiger Praws',
    description: 'Premium prawns with seasoned masalas',
    price: '$10.50',
    image:
      'https://images.unsplash.com/photo-1541283014184-791fa57c0735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGlnZXIlMjBwcmF3bnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60',
  },
  {
    title: 'Chicken Tikka',
    description: 'With butter mayonnaise, toamto and sauce bechamel',
    price: '$10.50',
    image:
      'https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2450&q=80',
  },
];

const RestaurantDetail = ({ route, navigation }) => {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetail;
