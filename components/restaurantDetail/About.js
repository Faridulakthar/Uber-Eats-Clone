import { View, Text, Image } from 'react-native';
import React from 'react';

const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;

  const formatedCategories = categories.map((cat) => cat.title).join(' • ');

  const description = `${formatedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantName name={name} />
      <RestaurantDescription description={description} />
    </View>
  );
};

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: '100%', height: 180 }} />
);

const RestaurantName = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: '600',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: '400',
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {description}
  </Text>
);

export default About;
