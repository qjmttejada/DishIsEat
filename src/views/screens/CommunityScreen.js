import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const CommunityScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
      <Image
              style={{
                width: '90%',
                resizeMode: 'contain',
                top: 0,
                right: -20,
              }}
              source={require('../../assets/communityheader.png')}
            />
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.details}>
        <Image
              style={{
                width: '100%',
                resizeMode: 'contain',
                top: -170,
                right: 0
              }}
              source={require('../../assets/tortangtalong.png')}
            />
        <Image
              style={{
                width: '98%',
                resizeMode: 'contain',
                top: -520,
                right: 0
              }}
              source={require('../../assets/porkadobo.png')}
            />
          <Image
              style={{
                width: '98%',
                resizeMode: 'contain',
                top: -870,
                right: 0
              }}
              source={require('../../assets/pancitcanton.png')}
            />
            <Image
              style={{
                width: '96.5%',
                resizeMode: 'contain',
                top: -1215,
                right: 0
              }}
              source={require('../../assets/chickentinola.png')}
            />
            <Image
              style={{
                width: '96.5%',
                resizeMode: 'contain',
                top: -1560,
                right: 0
              }}
              source={require('../../assets/halohalo.png')}
            />
            <Image
              style={{
                width: '96.5%',
                resizeMode: 'contain',
                top: -1900,
                right: 0
              }}
              source={require('../../assets/sisig.png')}
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
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default CommunityScreen;
