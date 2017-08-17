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
            <Container>
                <Content>
                    <Icon name="home" onPress={this.goBack} />
                    <Form>
                        <Text>Time:</Text>
                        <Item rounded>
                            <Input
                                placeholder="time"
                                keyboardType="numeric"
                                onChangeText={text =>
                                    this.setState({ time: text })}
                                value={this.state.time}
                            />
                        </Item>
                        <Text onPress={this.setTime}>Button</Text>
                        <Text>Date:</Text>
                        <Item rounded>
                            <Input
                                placeholder="date"
                                onChangeText={text =>
                                    this.setState({ date: text })}
                                value={this.state.date}
                            />
                        </Item>
                        <Text onPress={this.setDate}>Button</Text>
                    </Form>
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
