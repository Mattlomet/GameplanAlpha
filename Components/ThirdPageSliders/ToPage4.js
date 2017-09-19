import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container, Content, Button, Icon } from "native-base";

export default class ToPage4 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button
                rounded
                iconRight
                light
                onPress={this.props.nextPage}
                style={{
                    marginRight: 5
                }}
            >
                <Text>Next</Text>
                <Icon name="ios-arrow-round-forward-outline" />
            </Button>
        );
    }
}
