import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container, Content, Button, Icon } from "native-base";

export default class BackToPage1 extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <Container>
                <Content>
                    <Button iconLeft light onPress={this.props.lastPage}>
                        <Icon name="home" />
                        <Text>Back</Text>
                    </Button>
                </Content>
            </Container>
        );
    }
}
