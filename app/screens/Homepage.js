import React, { Component } from "react";
import { View, Text, FlatList, StatusBar } from "react-native"
import getWP from "../utils/getWordPairs.js"
import Row from "../row/"


/**
    *@class ----ENG----
    *This is the Component that will be rendered as first screen
    *from the StackNavigator ( That we will code soon ).
    *For now instead of using an array of random word pairs, we'll instanciate
    *another simple array of strings as a placeholder.
    *@class ----ITA----
    *Questo è il Component che verrà renderizzato come primo schermo
    *dallo StackNavigator ( che verrà implementato in seguito ).
    *Per adesso, invece di usare un array di parole inglesi casuali a coppie, creeremo
    *un'istanza di un array di stringhe provvisiorio.
*/

export default class HomePage extends Component{

    constructor(props){
        super(props);
        this.wordsArray = getWP( 20 ); 
        this.state = {
            dataSource: this.wordsArray
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
        return ( <Row data = {rowData} heart = { true } favourites = { this.props.screenProps.favourites }/> )
    }

    _keyExtractor(item, index){
        return ( index.toString() + ": " + item );
    }

    _onEndReached(){
        this.setState({dataSource: this.state.dataSource.concat( getWP( 20 ) ) })
    }

    render(){
        return (<View>
                    <StatusBar backgroundColor="white" barStyle="dark-content"/>
                    <FlatList 
                        data = {this.state.dataSource}
                        renderItem = {({item})=> this._renderRow(item) }
                        keyExtractor = {this._keyExtractor}
                        ItemSeparatorComponent = {()=> <View style={{height:1, width:"100%", backgroundColor:"lightgrey"}} />}
                        onEndReached = { () => this._onEndReached() }
                    />
            </View>);
    }
}