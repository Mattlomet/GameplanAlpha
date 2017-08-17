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

export default class AmountOfGuests extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Amount of Guests</Text>
                    <Form>
                        <Item rounded>
                            <Input placeholder="#" />
                        </Item>
                        <Text>Button</Text>
                    </Form>
                </Content>
            </Container>
        );
    }
}
