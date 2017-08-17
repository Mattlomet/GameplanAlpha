import React, { Component } from "react";
import { Text, View } from "react-native";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Icon
} from "native-base";

export default class EmailGroup extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    render() {
        return (
            <Container>
                <Content>
                    <Icon name="home" onPress={this.goBack} />
                    <Text>Email Group</Text>
                </Content>
            </Container>
        );
    }
    goBack() {
        this.props.backPage();
    }
}
