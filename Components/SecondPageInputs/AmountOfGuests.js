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

export default class AmountOfGuests extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amountOfGuests: ""
        };
        this.setAmountOfGuests = this.setAmountOfGuests.bind(this);
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
                            placeholder="# of Guests"
                            onChangeText={text =>
                                this.setState({ amountOfGuests: text })}
                            value={this.state.amountOfGuests}
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
                    <Text onPress={this.setAmountOfGuests}>Button</Text>
                </Button>
            </Content>
        );
    }
    setAmountOfGuests() {
        this.props.pickAmountOfGuests(this.state.amountOfGuests);
    }
}
