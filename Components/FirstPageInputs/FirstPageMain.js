import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Right,
    Body,
    Left,
    Title
} from "native-base";
import LocationRadius from "./LocationRadius";
import Occasion from "./Occasion";
import TimeDate from "./TimeDate";
import ToPage2 from "./ToPage2";

export default class FirstPageMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        };
        this.openLocationRadius = this.openLocationRadius.bind(this);
        this.openOccasion = this.openOccasion.bind(this);
        this.openTimeDate = this.openTimeDate.bind(this);
        this.backPage = this.backPage.bind(this);
        this.pickLocationHandler2 = this.pickLocationHandler2.bind(this);
        this.pickRadiusHandler2 = this.pickRadiusHandler2.bind(this);
        this.pickOccasionHandler2 = this.pickOccasionHandler2.bind(this);
        this.pickTimeHandler2 = this.pickTimeHandler2.bind(this);
        this.pickDateHandler2 = this.pickDateHandler2.bind(this);
    }
    render() {
        if (this.state.page == "LocationRadius") {
            return (
                <LocationRadius
                    LocationTest={this.props.LocationTest}
                    pickLocation={this.pickLocationHandler2}
                    pickRadius={this.pickRadiusHandler2}
                    backPage={this.backPage}
                />
            );
        } else if (this.state.page == "Occasion") {
            return (
                <Occasion
                    pickOccasion={this.pickOccasionHandler2}
                    backPage={this.backPage}
                />
            );
        } else if (this.state.page == "TimeDate") {
            return (
                <TimeDate
                    pickTime={this.pickTimeHandler2}
                    pickDate={this.pickDateHandler2}
                    backPage={this.backPage}
                />
            );
        } else if (this.state.page == "") {
            return (
                <Container
                    style={{
                        backgroundColor: "#a3e4f9"
                    }}
                >
                    <Header
                        style={{
                            backgroundColor: "#00c2ff"
                        }}
                    >
                        <Text
                            style={{
                                marginTop: 10,
                                fontFamily: "Monaco",
                                fontSize: 25,
                                color: "#fafafa"
                            }}
                        >
                            Set Up GamePlan
                        </Text>
                    </Header>
                    <Content>
                        <Card
                            style={{
                                marginTop: 10
                            }}
                        >
                            <CardItem header>
                                <Icon active name="ios-locate-outline" />
                                <Text>Location & Radius</Text>
                                <Right>
                                    <Icon
                                        name="arrow-forward"
                                        onPress={this.openLocationRadius}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Location - {this.props.location}
                                    </Text>
                                    <Text>
                                        Radius(Miles) - {this.props.Radius}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card
                            style={{
                                marginTop: 20
                            }}
                        >
                            <CardItem header>
                                <Icon active name="ios-pint-outline" />
                                <Text>Occasion</Text>

                                <Right>
                                    <Icon
                                        name="arrow-forward"
                                        onPress={this.openOccasion}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Occasion - {this.props.Occasion}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Card
                            style={{
                                marginTop: 20
                            }}
                        >
                            <CardItem header>
                                <Icon active name="ios-time-outline" />
                                <Text>Time and Date</Text>

                                <Right>
                                    <Icon
                                        name="arrow-forward"
                                        onPress={this.openTimeDate}
                                    />
                                </Right>
                            </CardItem>
                            <CardItem>
                                <Body>
                                    <Text>
                                        Time - {this.props.Time}
                                    </Text>
                                    <Text>
                                        Date - {this.props.Date}
                                    </Text>
                                </Body>
                            </CardItem>
                        </Card>
                        <Content
                            style={{
                                marginTop: 10,
                                alignSelf: "flex-end"
                            }}
                        >
                            <ToPage2 nextPage={this.props.nextPage} />
                        </Content>
                    </Content>
                </Container>
            );
        }
    }
    openLocationRadius() {
        this.setState({ page: "LocationRadius" });
    }
    openOccasion() {
        this.setState({ page: "Occasion" });
    }
    openTimeDate() {
        this.setState({ page: "TimeDate" });
    }
    backPage() {
        this.setState({ page: "" });
    }
    pickLocationHandler2(string) {
        this.props.pickLocation(string);
    }
    pickRadiusHandler2(string) {
        this.props.pickRadius(string);
    }
    pickOccasionHandler2(string) {
        this.props.pickOccasion(string);
    }
    pickTimeHandler2(string) {
        this.props.pickTime(string);
    }
    pickDateHandler2(string) {
        this.props.pickDate(string);
    }
}
