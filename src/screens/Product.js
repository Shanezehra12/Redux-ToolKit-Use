import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addCartItem} from '../reduxtoolkit/CartSlice';

const data = [
  {
    name: 'Nike Max 1',
    price: '$120',
    imageUrl:
      'https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?w=900&t=st=1696329597~exp=1696330197~hmac=f2d11ca7f502903ea8d50f685082f741a307ea20172346955d38a38894275679',
  },
  {
    name: 'Adidas 2',
    price: '$150',
    imageUrl:
      'https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=740&t=st=1696329717~exp=1696330317~hmac=fbbaf1ea19164a6c575d18fec0ed8929ed228846fcac2372f48e55918e2243ae',
  },
  {
    name: 'Puma RS-X 3',
    price: '$110',
    imageUrl:
      'https://img.freepik.com/premium-photo/gray-sneakers-with-red-laces-white-background_39665-9.jpg?w=900',
  },
  {
    name: 'Reebok Classic 4',
    price: '$80',
    imageUrl:
      'https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?w=900&t=st=1696330038~exp=1696330638~hmac=41d6c6e5bbfe7c7f425221200fe1abbfeffed48aa7e9be8ecc48867fb0767ca4',
  },
  {
    name: 'New Balance 5',
    price: '$175',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxwVVRLuoCQ-ZhjdtfSDd0BoRgo3HBcA765w&usqp=CAU',
  },
  {
    name: 'Converse Chuck 6',
    price: '$55',
    imageUrl:
      'https://img.freepik.com/free-photo/fashion-shoes_1203-7555.jpg?w=900&t=st=1696330084~exp=1696330684~hmac=2f66aae70d1e80efb4174c3b0dc88174e689aedf5f8dd1c71d9ea5480bce0b95',
  },
  {
    name: 'Vans Old 7',
    price: '$65',
    imageUrl:
      'https://png.pngitem.com/pimgs/s/433-4336756_shoes-png-transparent-images-pair-of-shoes-png.png',
  },
  {
    name: 'Adidas Smith 8',
    price: '$80',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSY7_BP6PU56-5FDk72nqGt8RgSToAbgTExdVX0M0Ap1sAFiJLstXY1-lyQ9C5TdQUU1m0&usqp=CAU',
  },
  {
    name: 'Puma Suede 9',
    price: '$70',
    imageUrl:
      'https://png.pngitem.com/pimgs/s/10-108533_png-gym-shoes-transparent-background-sport-shoe-png.png',
  },
  {
    name: 'Asics 10',
    price: '$100',
    imageUrl:
      'https://png.pngtree.com/png-clipart/20230506/original/pngtree-sneakers-stained-trim-png-image_9145076.png',
  },
];

const Product = () => {
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const addedItems = useSelector(state => state);

  const addItem = item => {
    dispatch(addCartItem(item));
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: 'lightgray'}}>
        <View
          style={{
            width: '100%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginTop: -8,
              marginLeft: 14,
              fontSize: 25,
              fontWeight: '600',
              color: 'black',
            }}>
            Redux App
          </Text>

          <TouchableOpacity
            style={{
              width: 80,
              height: 40,
              borderRadius: 20,
              backgroundColor: 'lightgreen',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginRight: 20,
            }}
            onPress={() => {
              navigation.navigate('Cart');
            }}>
            <Image
              source={require('../images/bag.png')}
              style={{width: 24, height: 24}}
            />

            <Text
              style={{
                color: 'black',
                fontSize: 24,
                fontWeight: '700',
                marginLeft: 10,
              }}>
              {addedItems.cart.length}
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  width: '90%',
                  height: 100,
                  borderRadius: 15,
                  alignSelf: 'center',
                  marginTop: 10,
                  borderWidth: 0.2,
                  borderColor: '#8e8e8e',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  backgroundColor: '#fff',
                }}>
                <View style={{width: '60%', padding: 20}}>
                  <Text
                    style={{fontSize: 18, fontWeight: '600', color: 'black'}}>
                    {item.name}
                  </Text>
                  <Text
                    style={{fontSize: 22, fontWeight: '600', color: 'black'}}>
                    {item.price}
                  </Text>

                  <TouchableOpacity
                    style={{
                      height: 30,
                      borderRadius: 10,
                      width: 100,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'darkgreen',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      addItem(item);
                    }}>
                    <Text style={{color: 'white'}}>Add to Cart</Text>
                  </TouchableOpacity>
                </View>

                <Image
                  source={{uri: item.imageUrl}}
                  style={{
                    width: 100,
                    height: 80,
                    borderRadius: 10,
                    marginRight: 15,
                  }}
                />
              </View>
            );
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Product;
