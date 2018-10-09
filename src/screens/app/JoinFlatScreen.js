import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";
import { QRscanner } from "react-native-qr-scanner";
import Icon from "react-native-vector-icons/MaterialIcons";

export default class JoinFlatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flashMode: false,
      zoom: 0.2,
      flashIcon:"flash-on"
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <QRscanner
          onRead={this.onRead}
          renderBottomView={this.bottomView}
          flashMode={this.state.flashMode}
          zoom={this.state.zoom}
          finderY={50}
          hintText={"Scan the QRCode of the flat you are joining"}
        />
      </View>
    );
  }

  bottomView = () => {
    return (
      <View
        style={{ flex: 1, flexDirection: "row", backgroundColor: "#0000004D" }}
      >
        <TouchableOpacity
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          onPress={() => {
            this.setState({ flashMode: !this.state.flashMode });
            if (this.state.flashMode) {
              this.setState({ flashIcon: "flash-on" });
            } else {
              this.setState({ flashIcon: "flash-off" });
            }
          }}
        >
          <Icon
            raised
            name={this.state.flashIcon}
            size={50}
            type="font-awesome"
            color="#ffffff"
          />
        </TouchableOpacity>
      </View>
    );
  };

  onRead = res => {
    console.log(res);
  };
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000"
  }
});
