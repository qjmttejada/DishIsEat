import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
      <Image
              style={{
                width: '94%',
                resizeMode: 'contain',
                top: 0,
                right: -10,
              }}
              source={require('../../assets/homeheader.png')}
            />
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.details}>
        <Image
              style={{
                width: '100%',
                resizeMode: 'contain',
                top: -64,
                right: 0
              }}
              source={require('../../assets/home.png')}
            />
        <Image
              style={{
                width: '10%',
                resizeMode: 'contain',
                top: 0,
                right: 0
              }}
              source={require('../../assets/justwhite.png')}
            />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: -40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  details: {
    paddingVertical: 0,
    alignItems: 'center',
  },
});

export default HomeScreen;