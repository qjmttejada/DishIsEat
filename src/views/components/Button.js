import React from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';
import COLORS from '../../consts/colors';

const PrimaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.btnContainer}>
        <Text style={style.title}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const SecondaryButton = ({title, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={{...style.btnContainer, backgroundColor: COLORS.white}}>
        <Text style={{...style.title, color: COLORS.primary}}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const AddButton = ({addtitle, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.addbtnContainer}>
        <Text style={style.addtitle}>{addtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const MyIngrButton = ({addtitle, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.ingrbtnContainer}>
        <Text style={style.addtitle}>{addtitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const FiltersButton = ({filtertitle, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.filterContainer}>
        <Text style={style.filtertitle}>{filtertitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const CookButton = ({filtertitle, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View style={style.cookContainer}>
        <Text style={style.filtertitle}>{filtertitle}</Text>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  title: {color: COLORS.white, fontWeight: 'bold',fontSize: 24},
  addtitle: {color: COLORS.dark, fontSize: 12},
  filtertitle: {color: COLORS.dark, fontSize: 18},
  btnContainer: {
    backgroundColor: COLORS.primary,
    height: 60,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addbtnContainer: {
    backgroundColor: COLORS.secondary,
    height: 30,
    width: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ingrbtnContainer: {
    backgroundColor: COLORS.secondary,
    height: 30,
    width: 110,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterContainer: {
  backgroundColor: COLORS.light,
  height: 50,
  width: 170,
  borderRadius: 15,
  justifyContent: 'center',
  alignItems: 'center',
  },
  cookContainer: {
    backgroundColor: COLORS.secondary,
    height: 50,
    width: 170,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    },
});

export {PrimaryButton, SecondaryButton, AddButton, MyIngrButton, FiltersButton, CookButton};
