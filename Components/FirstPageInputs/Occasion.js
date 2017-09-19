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
    Button,
    Card,
    CardItem
} from "native-base";

export default class Occasion extends Component {
    constructor(props) {
        super(props);
        this.state = {
            occasion: ""
        };
        this.goBack = this.goBack.bind(this);
        this.setOccasion = this.setOccasion.bind(this);
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
                    <Card
                        style={{
                            alignItems: "center"
                        }}
                    >
                        <CardItem header>
                            <Text>Whats the Occasion?</Text>
                        </CardItem>
                        <CardItem>
                            <Item rounded>
                                <Input
                                    placeholder="occasion"
                                    onChangeText={text =>
                                        this.setState({ occasion: text })}
                                    value={this.state.occasion}
                                />
                            </Item>
                        </CardItem>
                        <CardItem>
                            <Button
                                block
                                style={{
                                    backgroundColor: "#a3e4f9"
                                }}
                            >
                                <Text onPress={this.setOccasion}>Button</Text>
                            </Button>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
    goBack() {
        this.props.backPage();
    }
    setOccasion() {
        this.props.pickOccasion(this.state.occasion);
    }
}
