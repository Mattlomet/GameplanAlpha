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

export default class GroupName extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Text>Group Name</Text>
                    <Form>
                        <Item rounded>
                            <Input placeholder="Group Name" />
                        </Item>
                        <Text>Button</Text>
                    </Form>
                </Content>
            </Container>
        );
    }
}
