import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, Header } from "react-native";
import Main from "./Components/Main.js";

export default class GamePlan extends Component {
    render() {
        return <Main />;
    }
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF"
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: "center",
//         margin: 10
//     },
//     instructions: {
//         textAlign: "center",
//         color: "#333333",
//         marginBottom: 5
//     }
// });

AppRegistry.registerComponent("GamePlan", () => GamePlan);
