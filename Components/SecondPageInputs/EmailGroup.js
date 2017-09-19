import React, { Component } from "react";
import { Text, View, StatusBar } from "react-native";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Icon,
    Card,
    CardItem
} from "native-base";

export default class EmailGroup extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
    }
    render() {
        return (
            <Container
                style={{
                    backgroundColor: "#a3e4f9"
                }}
            >
                <StatusBar backgroundColor="#a3e4f9" barStyle="light-content" />
                <Icon
                    name="home"
                    onPress={this.goBack}
                    style={{
                        color: "#ffffff"
                    }}
                />
                <Content>
                    <Card>
                        <CardItem header>
                            <Text>Email Group</Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
    goBack() {
        this.props.backPage();
    }
}
