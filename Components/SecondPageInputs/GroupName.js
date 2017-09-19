import React, { Component } from "react";
import { Text, View } from "react-native";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Icon,
    Button
} from "native-base";

export default class GroupName extends Component {
    constructor(props) {
        super(props);
        this.state = {
            groupName: ""
        };
        this.setGroupName = this.setGroupName.bind(this);
    }
    render() {
        return (
            <Content>
                <Form>
                    <Item
                        rounded
                        style={{
                            borderColor: "#a3e4f9",
                            marginTop: 5,

                            width: 150,
                            marginBottom: 40
                        }}
                    >
                        <Input
                            placeholder="Group Name"
                            onChangeText={text =>
                                this.setState({ groupName: text })}
                            value={this.state.groupName}
                        />
                    </Item>
                </Form>
                <Button
                    rounded
                    light
                    style={{
                        backgroundColor: "#a3e4f9",
                        alignItems: "center",
                        marginLeft: 25
                    }}
                >
                    <Text onPress={this.setGroupName}>Button</Text>
                </Button>
            </Content>
        );
    }
    setGroupName() {
        this.props.pickGroupName(this.state.groupName);
    }
}
