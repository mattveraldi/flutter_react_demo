import React, { Component } from "react";
import { View, Text, ListView, StatusBar } from "react-native"


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
        this.testArray = [ "Word1", "Word2", "Word3" ] 
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows( this.testArray ),
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
        return (<Text> { rowData } </Text>)
    }


    render(){
        return (<View>
                    <StatusBar backgroundColor="white" barStyle="dark-content"/>
                    <ListView 
                        dataSource = {this.state.dataSource}
                        renderRow = {(rowData)=> this._renderRow(rowData) }
                        renderSeparator = {(sectionID) => <View style={{height:1}}/>}
                        enableEmptySections
                    />
            </View>);
    }
}