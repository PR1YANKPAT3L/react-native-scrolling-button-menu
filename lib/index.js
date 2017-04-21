import React, {
  Component
} from 'react';

import ReactNative, {
  ScrollView,
  StyleSheet,
  Text,
  ListView,
  Image,
  TouchableOpacity,
  View
} from 'react-native';
var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});


class ScrollingButtonMenu extends Component {
  _onPress(data) {
      this.props.onPress(data);
  }

  _renderRow(data,idx) {
      return(
        <TouchableOpacity activeOpacity={this.props.selectedOpacity} onPress={()=>this._onPress(data)} key={idx}>
            <View style={
              {
                backgroundColor:data.backgroundColor,
                borderColor:data.borderColor,
                paddingTop:this.props.paddingItemTop,
                paddingBottom:this.props.paddingItemBottom,
                paddingLeft:this.props.paddingItemLeft,
                paddingRight:this.props.paddingItemRight,
                borderRadius:this.props.borderItemRadius,
                borderWidth:this.props.borderItemWidth,
                marginRight: this.props.marginItemRight
              }
            }>
              <Text style={
                {
                  color:data.textColor,
                  fontSize:this.props.fontSize,
                  fontWeight:this.props.fontWeight}
                }>{data.text.toUpperCase()}</Text>
            </View>
        </TouchableOpacity>
      );
  }
  render() {
    return (
        <ListView
            dataSource={ds.cloneWithRows(this.props.items)}
            enableEmptySections={true}
            style={{padding:this.props.padding}}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderFooter={()=>{
                return (<View style={{padding:(this.props.padding/2)}} />)
            }}
            renderRow={
              (data) => this._renderRow(data)
            }
        />
    )
  }
}

ScrollingButtonMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  onPress: React.PropTypes.func.isRequired,
  selectedOpacity: React.PropTypes.number,
  paddingItemTop: React.PropTypes.number,
  paddingItemBottom: React.PropTypes.number,
  paddingItemLeft: React.PropTypes.number,
  paddingItemRight: React.PropTypes.number,
  marginItemRight: React.PropTypes.number,
  borderItemWidth: React.PropTypes.number,
  borderItemRadius: React.PropTypes.number,
  padding: React.PropTypes.number.isRequired,
  fontSize: React.PropTypes.number,
  fontWeight: React.PropTypes.string
}

ScrollingButtonMenu.defaultProps = {
  selectedOpacity: 0.7,
  paddingItemTop: 7,
  paddingItemBottom: 7,
  paddingItemLeft: 16,
  paddingItemRight: 16,
  marginItemRight: 7,
  borderItemWidth: 1,
  borderItemRadius: 25,
  fontSize: 12,
  fontWeight: 'bold'
}

module.exports = ScrollingButtonMenu;