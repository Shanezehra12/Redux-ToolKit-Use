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
import { removeCartItem } from '../reduxtoolkit/CartSlice';
import { useDispatch, useSelector } from 'react-redux';


const Cart = () => {
  const navigation = useNavigation();

  const items = useSelector(state => state.cart);

  const dispatch = useDispatch();
  const removeItems = (index) => {
    dispatch(removeCartItem(index))
  }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, backgroundColor: "lightgray"}}>
        <View
          style={{
            width: '100%',
            height: 70,
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              paddingLeft: 10,
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: 15,
              marginTop: -8
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Text style={{fontSize: 25, fontWeight: '600', color: 'black'}}>
              Back
            </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={items}
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
                      backgroundColor: 'red',
                      marginTop: 5,
                    }}
                    onPress={() => {
                      removeItems(index);
                    }}>
                    <Text style={{color: 'white'}}>Remove</Text>
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

export default Cart;
