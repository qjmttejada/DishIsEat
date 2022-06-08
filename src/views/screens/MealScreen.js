import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import COLORS from '../../consts/colors';
import {PrimaryButton} from '../components/Button';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>   Meal Plan                        </Text>
        <Icon name="add-circle-outline" size={30}/>
      </View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={style.details}>
        <Image
              style={{
                width: '100%',
                resizeMode: 'contain',
                top: -100,
                right: 0
              }}
              source={require('../../assets/mealplan.png')}
            />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  details: {
    paddingVertical: 0,
    alignItems: 'center',
  },
});

export default ProfileScreen;