import React from 'react';
import {SafeAreaView, 
        StyleSheet, 
        View,
        Image} from 'react-native';
        import {
            TextInput,
          } from 'react-native-gesture-handler';
import COLORS from '../../consts/colors';
import * as Buttons from '../components/Button';

const RecommenderScreen = ({navigation}) => {
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
          <View style={{height: 400}}>
            <Image
              style={{
                width: '100%',
                resizeMode: 'contain',
                top: -320,
              }}
              source={require('../../assets/PNGappicon.png')}
            />
          </View>
          <View style={style.textContainer}>
            <View>
              <TextInput style={{
                fontSize: 16, 
                textAlign: 'left', 
                color: COLORS.grey,
                backgroundColor: COLORS.light,
                borderRadius: 20,
                position: 'absolute',
                right: 0,
                top: -80}}

                placeholder="   Enter an ingredient                                                               "/>
            </View>
            <View style={{
                flex: 1,
                position: 'absolute',
                right: 30,
                top: -71 
                }}>
                <Buttons.AddButton
                onPress={() => navigation.navigate('Home')}
                addtitle="Add"
                />
            </View>
            <View style={{
                flex: 1,
                position: 'absolute',
                right: 20,
                top: -130,
                }}>
                <Buttons.MyIngrButton
                onPress={() => navigation.navigate('Home')}
                addtitle="My Ingredients"
                />
            </View>
            <View style={{
                flex: 1,
                position: 'absolute',
                top: 90,
                left: 20}}>
                <Buttons.FiltersButton
                onPress={() => navigation.navigate('Filters')}
                filtertitle="Filters"
                />
            </View>
            <View style={{
                flex: 1,
                position: 'absolute',
                top: 90,
                right: 20}}>
                <Buttons.CookButton
                onPress={() => navigation.navigate('CookScreen')}
                filtertitle="Let's Cook!"
                />
            </View>
            <View style={{height: 400}}>
            <Image
              style={{
                flex: 1,
                position: 'absolute',

                width: '120%',
                resizeMode: 'contain',
                top: -410,
                right: -20
              }}
              source={require('../../assets/PNGwavesmall.png')}
            />
          </View>
          </View>
        </SafeAreaView>
      );
    };

    const style = StyleSheet.create({
      textContainer: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'space-between',
        paddingBottom: 40,
      },
      indicatorContainer: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
      },
      currentIndicator: {
        height: 12,
        width: 30,
        borderRadius: 10,
        backgroundColor: COLORS.primary,
        marginHorizontal: 5,
      },
      indicator: {
        height: 12,
        width: 12,
        borderRadius: 6,
        backgroundColor: COLORS.grey,
        marginHorizontal: 5,
      },
        inputContainer: {
        flex: 1,
        height: 40,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: COLORS.light,
        alignItems: 'baseline',
        paddingHorizontal: 50,
        paddingVertical: 40, 
        },
    });

export default RecommenderScreen;