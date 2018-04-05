import React, {Component} from "react";
import {StackNavigator} from "react-navigation";
import HomePage from "../screens/Homepage.js";
import Favourites from "../screens/Favourites.js";
import Icon from 'react-native-vector-icons/dist/FontAwesome';

/*
 ---ENG---
 This is the StackNavigator.
 The HomePage and the Favourites Screens has props given by the Navigator. That's useful to 
 handle the favourites set between the screens.

 ---ITA--- 
 Questo è lo StackNavigator.
 L'Homepage e la pagina Favourites ammettono props passate dal navigatore così da poter gestire il set di parole
 preferite tra i due schermi che ci saranno.
 */
export default router= StackNavigator({
    Home:{ screen: (props) => <HomePage {...props} />,
           navigationOptions: ({ navigation, screenProps }) => ({
                                                                    title: "Startup Name Generator",
                                                                    headerRight: <Icon name={"list" } style={{marginRight:16, fontSize:16}} color={"black"} onPress = {()=> navigation.navigate("Favourites", {screenProps: screenProps})} />,
                                                                    headerTitleStyle:{fontFamily:"Roboto"}
                                                                })
    },
    Favourites:{ screen: (props)=> <Favourites {...props} />,
                navigationOptions:{title:"Favourites"}}
});