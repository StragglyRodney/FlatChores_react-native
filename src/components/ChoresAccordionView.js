import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Collapsible from 'react-native-collapsible'
import Accordion from 'react-native-collapsible/Accordion'
import firebase from 'react-native-firebase'
import { Button } from 'react-native-elements'

class ChoresAccordionView extends Component {
  _renderHeader (section) {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>{section.title}</Text>
      </View>
    )
  }

  _renderContent (section) {
    return (
      <View style={styles.content}>
        <Text>{section.content}</Text>
      </View>
    )
  }

  render () {
    console.log('sections: ' + this.props.sections)
    return (
      <Accordion
        sections={this.props.sections}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF'
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: '300',
    marginBottom: 20
  },
  header: {
    backgroundColor: '#b2ebf2',
    padding: 30,
    borderBottomColor: '#bbb',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  headerText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500'
  },
  content: {
    padding: 20,
    backgroundColor: '#F5FCFF'
  },
  active: {
    backgroundColor: 'rgba(255,255,255,1)'
  },
  inactive: {
    backgroundColor: 'rgba(245,252,255,1)'
  },
  selectors: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  selector: {
    backgroundColor: '#F5FCFF',
    padding: 10
  },
  activeSelector: {
    fontWeight: 'bold'
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: '500',
    padding: 10
  }
})

export default ChoresAccordionView
