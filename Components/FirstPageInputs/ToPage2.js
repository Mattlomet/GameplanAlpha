import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container, Content, Button, Icon } from "native-base";

export default class ToPage2 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Content>
                    <Button iconRight light onPress={this.props.nextPage}>
                        <Text>Next</Text>
                        <Icon name="arrow-forward" />
                    </Button>
                </Content>
            </Container>
        );
    }
}
