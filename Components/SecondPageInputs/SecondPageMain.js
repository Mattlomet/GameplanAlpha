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
    Left,
    Grid,
    Col,
    Row
} from "native-base";
import EmailGroup from "./EmailGroup";
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
        this.backPage = this.backPage.bind(this);
    }
    render() {
        if (this.state.page == "email") {
            return <EmailGroup backPage={this.backPage} />;
        } else if (this.state.page == "") {
            return (
                <Container
                    style={{
                        backgroundColor: "rgba(0, 194, 255, 0.25)"
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
                                color: "#ffffff"
                            }}
                        >
                            Gameplan
                        </Text>
                    </Header>
                    <Content>
                        <Container>
                            <Grid>
                                <Left>
                                    <GroupName
                                        pickGroupName={this.props.pickGroupName}
                                    />
                                </Left>
                                <Right>
                                    <AmountOfGuests
                                        pickAmountOfGuests={
                                            this.props.pickAmountOfGuests
                                        }
                                    />
                                </Right>
                            </Grid>
                            <Grid
                                style={{
                                    height: 5,
                                    backgroundColor: "rgb(255, 255, 255)"
                                }}
                            >
                                <Row>
                                    <Left>
                                        <Icon
                                            active
                                            name="ios-mail-open-outline"
                                        />
                                        <Text>Email Collaborators</Text>
                                    </Left>
                                    <Right>
                                        <Icon
                                            name="arrow-forward"
                                            onPress={this.openEmail}
                                        />
                                    </Right>
                                </Row>
                            </Grid>
                            <Grid
                                style={{
                                    marginTop: 10
                                }}
                            >
                                <Row>
                                    <Left>
                                        <BackToPage1
                                            lastPage={this.props.lastPage}
                                            style={{
                                                width: 2,
                                                height: 4
                                            }}
                                        />
                                    </Left>
                                    <Right>
                                        <ToPage3
                                            nextPage={this.props.nextPage}
                                            style={{
                                                width: 2,
                                                height: 4
                                            }}
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
    backPage() {
        this.setState({ page: "" });
    }
}
