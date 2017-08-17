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
            <Container>
                <Content>
                    <Icon name="home" onPress={this.goBack} />
                    <Form>
                        <Text>
                            Whats the Occasion? {this.state.occasion}
                        </Text>
                        <Item>
                            <Input
                                placeholder="occasion"
                                onChangeText={text =>
                                    this.setState({ occasion: text })}
                                value={this.state.occasion}
                            />
                        </Item>
                        <Text onPress={this.setOccasion}>Button</Text>
                    </Form>
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
