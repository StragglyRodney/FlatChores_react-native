// import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, ListView, Dimensions, Image } from 'react-native'
import Leaderboard from 'react-native-leaderboard';
import PropTypes from 'prop-types'; // ES6
import ReactNativeParallaxHeader from 'react-native-parallax-header';
import ParallaxScrollView from 'react-native-parallax-scroll-view';



// create a component
class LeaderBoardScreen extends Component {
  static navigationOptions = { header: null }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (r1, r2) => r1 !== r2
      }).cloneWithRows([
        'Joe: 210',
        'Bob: 195',
        'Andy: 120',
        'Rodney: 34',
        'Dan: 4',

      ])
    };
  }

  state = {
    data: [
      { userName: 'Joe', highScore: 52 },
      { userName: 'Jenny', highScore: 120 },
      { userName: 'Dan', highScore: 1220 },
      { userName: 'Andy', highScore: 10 },
      { userName: 'Rodney', highScore: 69 },
      //...
    ] //can also be an object of objects!: data: {a:{}, b:{}}
  }


  render() {
    const { onScroll = () => { } } = this.props;
    return (
      <ListView
        ref="ListView"
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(rowData) => (
          <View key={rowData} style={styles.row}>
            <Text style={styles.rowText}>
              {rowData}
            </Text>
          </View>
        )}
        renderScrollComponent={props => (
          <ParallaxScrollView
            onScroll={onScroll}

            headerBackgroundColor="#333"
            stickyHeaderHeight={STICKY_HEADER_HEIGHT}
            parallaxHeaderHeight={PARALLAX_HEADER_HEIGHT}
            backgroundSpeed={10}

            renderBackground={() => (
              <View key="background">
                <Image source={{
                  uri: 'https://i.imgur.com/yn23LX6.jpg',
                  width: window.width,
                  height: PARALLAX_HEADER_HEIGHT
                }} />
                <View style={{
                  position: 'absolute',
                  top: 0,
                  width: window.width,
                  backgroundColor: 'rgba(0,0,0,0.4)',
                  height: PARALLAX_HEADER_HEIGHT
                }} />
              </View>
            )}

            renderForeground={() => (
              <View key="parallax-header" style={styles.parallaxHeader}>
                <Image style={styles.avatar} source={{
                  uri: 'https://i.imgur.com/wx6KuDO.png',
                  width: AVATAR_SIZE,
                  height: AVATAR_SIZE
                }} />
                <Text style={styles.sectionSpeakerText}>
                  Chore Leaderboard
              </Text>
                <Text style={styles.sectionTitleText}>
                  Who will be the Choree of the Month?!
              </Text>
              </View>
            )}

            renderStickyHeader={() => (
              <View key="sticky-header" style={styles.stickySection}>
                <Text style={styles.stickySectionText}>Leaderboard</Text>
              </View>
            )}

            renderFixedHeader={() => (
              <View key="fixed-header" style={styles.fixedSection}>
                <Text style={styles.fixedSectionText}
                  onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                  Scroll to top
              </Text>
              </View>
            )} />
        )}
      />
    )
  }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;
// define your styles


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: window.width,
    height: PARALLAX_HEADER_HEIGHT
  },
  stickySection: {
    height: STICKY_HEADER_HEIGHT,
    width: window.width,
    justifyContent: 'flex-end',
    backgroundColor: '#00c2cc'
  },
  stickySectionText: {
    color: 'white',
    fontSize: 20,
    margin: 10
  },
  fixedSection: {
    position: 'absolute',
    bottom: 10,
    right: 10,

  },
  fixedSectionText: {
    color: '#999',
    fontSize: 20
  },
  parallaxHeader: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'column',
    paddingTop: 100,

  },
  avatar: {
    marginBottom: 10,
    borderRadius: AVATAR_SIZE / 2
  },
  sectionSpeakerText: {
    color: 'white',
    fontSize: 24,
    paddingVertical: 5
  },
  sectionTitleText: {
    color: 'white',
    fontSize: 18,
    paddingVertical: 5
  },
  row: {
    overflow: 'hidden',
    paddingHorizontal: 10,
    height: ROW_HEIGHT,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderBottomWidth: 1,
    justifyContent: 'center'
  },
  rowText: {
    fontSize: 20
  }
});

// make this component available to the app
export default LeaderBoardScreen
