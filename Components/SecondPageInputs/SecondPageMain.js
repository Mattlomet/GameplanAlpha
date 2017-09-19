import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View, StatusBar } from "react-native";
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Icon,
    Right,
    Left,
    Grid,
    Col,
    Row
} from "native-base";
import EmailGroup from "./EmailGroup";
import ReviewGamePlan from "./ReviewGamePlan";
import GroupName from "./GroupName";
import AmountOfGuests from "./AmountOfGuests";
import ToPage3 from "./ToPage3";
import BackToPage1 from "./BackToPage1";

export default class SecondPageMain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: ""
        };
        this.openEmail = this.openEmail.bind(this);
        this.openReview = this.openReview.bind(this);
        this.backPage = this.backPage.bind(this);
        this.pickAmountOfGuestsHandler2 = this.pickAmountOfGuestsHandler2.bind(
            this
        );
        this.pickGroupNameHandler2 = this.pickGroupNameHandler2.bind(this);
    }
    render() {
        if (this.state.page == "email") {
            return <EmailGroup backPage={this.backPage} />;
        }
        if (this.state.page == "review") {
            return (
                <ReviewGamePlan
                    Location={this.props.Location}
                    Radius={this.props.Radius}
                    Occasion={this.props.Occasion}
                    Time={this.props.Time}
                    GroupDate={this.props.GroupDate}
                    GroupName={this.props.GroupName}
                    GuestNumber={this.props.GuestNumber}
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
                    <StatusBar
                        backgroundColor="#a3e4f9"
                        barStyle="light-content"
                    />
                    <Content>
                        <Container>
                            <Text
                                style={{
                                    paddingLeft: 115,
                                    paddingBottom: 10,
                                    marginTop: 10,
                                    fontFamily: "Monaco",
                                    fontSize: 25,
                                    color: "#fafafa",
                                    borderBottomWidth: 2,
                                    borderColor: "#f0f0f0",
                                    marginLeft: 5,
                                    marginRight: 5
                                }}
                            >
                                Gameplan
                            </Text>

                            <Grid
                                style={{
                                    marginTop: 35,
                                    marginBottom: 45
                                }}
                            >
                                <Left
                                    style={{
                                        alignItems: "center",
                                        marginLeft: 5,
                                        marginRight: 5,

                                        height: 150,
                                        backgroundColor: "#ffffff"
                                    }}
                                >
                                    <GroupName
                                        pickGroupName={
                                            this.pickGroupNameHandler2
                                        }
                                    />
                                </Left>
                                <Right
                                    style={{
                                        alignItems: "center",
                                        marginRight: 5,
                                        marginLeft: 5,

                                        height: 150,
                                        backgroundColor: "#ffffff"
                                    }}
                                >
                                    <AmountOfGuests
                                        pickAmountOfGuests={
                                            this.pickAmountOfGuestsHandler2
                                        }
                                    />
                                </Right>
                            </Grid>
                            <Card
                                style={{
                                    height: 100,
                                    marginTop: 10
                                }}
                            >
                                <CardItem header>
                                    <Icon active name="ios-mail-open-outline" />
                                    <Text>Email Collaborators</Text>
                                    <Right>
                                        <Icon
                                            name="arrow-forward"
                                            onPress={this.openEmail}
                                        />
                                    </Right>
                                </CardItem>
                            </Card>
                            <Card
                                style={{
                                    height: 100,
                                    marginTop: 15
                                }}
                            >
                                <CardItem header>
                                    <Icon active name="map" />
                                    <Text>Review GamePlan</Text>
                                    <Right>
                                        <Icon
                                            name="arrow-forward"
                                            onPress={this.openReview}
                                        />
                                    </Right>
                                </CardItem>
                            </Card>

                            <Grid>
                                <Row>
                                    <Left>
                                        <BackToPage1
                                            lastPage={this.props.lastPage}
                                        />
                                    </Left>
                                    <Right>
                                        <ToPage3
                                            nextPage={this.props.nextPage}
                                        />
                                    </Right>
                                </Row>
                            </Grid>
                        </Container>
                    </Content>
                </Container>
            );
        }
    }
    openEmail() {
        this.setState({ page: "email" });
    }
    openReview() {
        this.setState({ page: "review" });
    }
    backPage() {
        this.setState({ page: "" });
    }
    pickGroupNameHandler2(string) {
        this.props.pickGroupName(string);
    }
    pickAmountOfGuestsHandler2(string) {
        this.props.pickAmountOfGuests(string);
    }
}
