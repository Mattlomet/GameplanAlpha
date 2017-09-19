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
                        <CardItem Header>
                            <Text>Where?</Text>
                        </CardItem>
                        <CardItem>
                            <Item rounded>
                                <Input
                                    placeholder="Philly"
                                    onChangeText={text =>
                                        this.setState({ location: text })}
                                    value={this.state.location}
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
                                <Text onPress={this.setWhere}>Button</Text>
                            </Button>
                        </CardItem>
                    </Card>
                    <Card
                        style={{
                            alignItems: "center"
                        }}
                    >
                        <CardItem Header>
                            <Text>How Far?</Text>
                        </CardItem>
                        <CardItem>
                            <Item rounded>
                                <Input
                                    placeholder="5 miles"
                                    onChangeText={text =>
                                        this.setState({ radius: text })}
                                    value={this.state.radius}
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
                                <Text onPress={this.setHowFar}>Button</Text>
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
    setWhere() {
        this.props.pickLocation(this.state.location);
    }
    setHowFar() {
        this.props.pickRadius(this.state.radius);
    }
}
