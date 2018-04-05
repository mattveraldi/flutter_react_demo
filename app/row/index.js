import React, { Component } from 'react';
import {View, TouchableHighlight, Text} from "react-native";
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import PropTypes from 'prop-types';


/**
 * @class
 * 
 * ---ENG---
 * This is a Component that will handle the render of each string passed as props from the 
 * FlatList in "app/screens/Homepage.js" .
 * 
 * @prop { string } data - the i-th string of the FlastList
 * 
 * ---ITA---
 * Questo è un Component che gestirà il rendering di ogni stringa passata come props dalla
 * FlatList in "app/screens/Homepage.js" .
 * 
 * @prop { string } data - la i-esima stringa della FlatList.
 */


export default class Row extends Component {

  constructor(props){
      super(props);
      this.state = { _isFavourite: false }
  }

  _onPress(){
    this.state._isFavourite ? this.props.favourites.delete(this.props.data) : this.props.favourites.add(this.props.data);
    this.setState({_isFavourite: !this.state._isFavourite});
  }

  render() {
    return (
            <TouchableHighlight style={{ height:70, justifyContent:"center", alignItems:"flex-start", backgroundColor:"#FAFAFA"}} onPress = { ()=> this.props.heart && this._onPress() } underlayColor="rgba(0,0,0,0)" activeOpacity = { 0.8 } > 
                <View style={{flexDirection:"row"}}>
                    <Text style={{fontSize:18, flex:1, marginLeft:16, color:"black", fontFamily:"Roboto"}}>{this.props.data}</Text>
                    { this.props.heart === true &&  <Icon name={this.state._isFavourite ? "heart" : "heart-o" } size={18}  style={{alignSelf:"flex-end", marginRight:16}} color={this.state._isFavourite ? "#FF0D11" : "black"} /> }
                </View>
            </ TouchableHighlight>
    );
  }
}
