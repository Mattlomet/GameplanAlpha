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

export default class LocationRadius extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radius: "",
            location: ""
        };
        this.goBack = this.goBack.bind(this);
        this.setWhere = this.setWhere.bind(this);
        this.setHowFar = this.setHowFar.bind(this);
    }
    render() {
        return (
            <Container>
                <Content>
                    <Icon name="home" onPress={this.goBack} />
                    <Form>
                        <Text>
                            Location: {this.state.location}
                        </Text>
                        <Text>Where?</Text>
                        <Item rounded>
                            <Input
                                placeholder="Philly"
                                onChangeText={text =>
                                    this.setState({ location: text })}
                                value={this.state.location}
                            />
                        </Item>
                        <Text onPress={this.setWhere}>Button</Text>

                        <Text>
                            Radius(in Miles): {this.state.radius}
                        </Text>
                        <Text>How Far?</Text>
                        <Item rounded>
                            <Input
                                placeholder="5 miles"
                                onChangeText={text =>
                                    this.setState({ radius: text })}
                                value={this.state.radius}
                            />
                        </Item>
                        <Text onPress={this.setHowFar}>Button</Text>
                    </Form>
                </Content>
            </Container>
        );
    }
    goBack() {
        this.props.backPage();
    }
    setWhere() {
        alert("SetWhere has ran");
        this.props.pickLocation(this.state.location);
    }
    setHowFar() {
        alert("sethow far has ran");
        this.props.pickRadius(this.state.radius);
    }
}
