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

export default class TimeDate extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: "",
            date: ""
        };
        this.goBack = this.goBack.bind(this);
        this.setTime = this.setTime.bind(this);
        this.setDate = this.setDate.bind(this);
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
                            <Text>Time:</Text>
                        </CardItem>
                        <CardItem>
                            <Item rounded>
                                <Input
                                    placeholder="time"
                                    keyboardType="numeric"
                                    onChangeText={text =>
                                        this.setState({ time: text })}
                                    value={this.state.time}
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
                                <Text onPress={this.setTime}>Button</Text>
                            </Button>
                        </CardItem>
                    </Card>
                    <Card
                        style={{
                            alignItems: "center"
                        }}
                    >
                        <CardItem header>
                            <Text>Date:</Text>
                        </CardItem>
                        <CardItem>
                            <Item rounded>
                                <Input
                                    placeholder="date"
                                    onChangeText={text =>
                                        this.setState({ date: text })}
                                    value={this.state.date}
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
                                <Text onPress={this.setDate}>Button</Text>
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
    setTime() {
        this.props.pickTime(this.state.time);
    }
    setDate() {
        this.props.pickDate(this.state.date);
    }
}
