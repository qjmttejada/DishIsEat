import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, Image} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import COLORS from '../../consts/colors';
import foods from '../../consts/foods';

const FiltersScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-left" size={30} onPress={navigation.goBack} />
        <Text style={{fontSize: 30, fontWeight: 'bold', textAlign: 'center'}}>              Filters              </Text>
        <Icon name="more-vertical" size={30}/>
      </View>
      <View style={style.details}>
        <Image
              style={{
                width: '100%',
                resizeMode: 'contain',
                top: -180,
                right: 0
              }}
              source={require('../../assets/filters.png')}
            />
      </View>
    </SafeAreaView>
  );
};
const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  details: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 0,
  },
});

export default FiltersScreen;