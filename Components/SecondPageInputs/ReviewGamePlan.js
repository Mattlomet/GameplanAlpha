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
    Card,
    CardItem
} from "native-base";

export default class ReviewGamePlan extends Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this);
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
                    <Card>
                        <CardItem header>
                            <Text>Review GamePlan</Text>
                        </CardItem>

                        <CardItem>
                            <Icon
                                name="ios-pricetag"
                                style={{
                                    marginRight: 15
                                }}
                            />
                            <Text>
                                Group's Name - {this.props.GroupName}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Icon
                                name="ios-people"
                                style={{
                                    marginRight: 15
                                }}
                            />
                            <Text>
                                Amount Of Guests - {this.props.GuestNumber}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Icon
                                name="ios-locate"
                                style={{
                                    marginRight: 15
                                }}
                            />
                            <Text>
                                Location - {this.props.Location}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Icon
                                name="ios-radio"
                                style={{
                                    marginRight: 15
                                }}
                            />
                            <Text>
                                Radius - {this.props.Radius}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Icon
                                name="ios-pizza"
                                style={{
                                    marginRight: 15
                                }}
                            />
                            <Text>
                                Occasion - {this.props.Occasion}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Icon
                                name="ios-clock"
                                style={{
                                    marginRight: 15
                                }}
                            />
                            <Text>
                                Time - {this.props.Time}
                            </Text>
                        </CardItem>
                        <CardItem>
                            <Icon
                                name="ios-calendar"
                                style={{
                                    marginRight: 15
                                }}
                            />
                            <Text>
                                Date - {this.props.GroupDate}
                            </Text>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
    goBack() {
        this.props.backPage();
    }
}
