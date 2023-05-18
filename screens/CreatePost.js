import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class CreatePost extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text}>CreatePost</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#15193c",
  },
  text: {
    fontSize: 20,
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
});
