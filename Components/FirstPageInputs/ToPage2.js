import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container, Content, Button, Icon } from "native-base";

export default class ToPage2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Button
                full
                rounded
                iconRight
                light
                onPress={this.props.nextPage}
                style={{
                    marginBottom: 10,
                    marginLeft: 5,
                    marginRight: 5
                }}
            >
                <Text>Next</Text>
                <Icon name="ios-arrow-round-forward-outline" />
            </Button>
        );
    }
}
