import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container, Content, Button, Icon } from "native-base";

export default class BackToPage2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button
                rounded
                iconLeft
                light
                onPress={this.props.lastPage}
                style={{
                    marginLeft: 5
                }}
            >
                <Icon name="ios-arrow-round-back-outline" />
                <Text>Back</Text>
            </Button>
        );
    }
}
