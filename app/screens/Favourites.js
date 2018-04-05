import React, { Component } from "react";
import { View, Text, FlatList, StatusBar } from "react-native"
import getWP from "../utils/getWordPairs.js"
import Row from "../row/"


/**
    *@class ----ENG----
    *This is the Component that will be rendered as second screen
    *from the StackNavigator.
    *@class ----ITA----
    *Questo è il Component che verrà renderizzato come primo schermo
    *dallo StackNavigator.
*/

export default class Favourites extends Component{

    constructor(props){
        super(props);
        this.state = {
            dataSource: [...this.props.screenProps.favourites]
        }
    }

    /** 
    *----ENG----
    *This is the method used by our ListView Component to render each Row.
    *@param { string } rowData - for each iteration of the array provided as dataSource, rowData will be the i-th Row of the ListView.
    *@return the Row Component for the i-th Row of the ListView.
    *----ITA----
    *Questo è il metodo utilizzato dalla nostra ListView per renderizzare ogni singola riga.
    *@param { string } rowData - per ogni iterazione dell'array utilizzato come dataSource rowData sarà l'i-esima stringa.
    *@return il Component che rappresenterà l'i-esima riga della ListView.
    */


    _renderRow(rowData){
        return ( <Row data = {rowData} heart = { false } /> )
    }

    _keyExtractor(item, index){
        return ( index.toString() + ": " + item );
    }


    render(){
        return (<View>
                    <StatusBar backgroundColor="white" barStyle="dark-content"/>
                    <FlatList 
                        data = {this.state.dataSource}
                        renderItem = {({item})=> this._renderRow(item) }
                        keyExtractor = {this._keyExtractor}
                        ItemSeparatorComponent = {()=> <View style={{height:1, width:"100%", backgroundColor:"lightgrey"}} />}
                    />
            </View>);
    }
}