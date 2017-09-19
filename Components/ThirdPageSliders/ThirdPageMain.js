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
import Atmosphere from "./Atmosphere";
import BrandPreference from "./BrandPreference";
import Price from "./Price";
import ToPage4 from "./ToPage4";
import BackToPage2 from "./BackToPage2";

export default class ThirdPageMain extends Component {
    constructor() {
        super();
        this.state = {
            page: ""
        };
    }
    render() {
        return (
            <Container
                style={{
                    backgroundColor: "#a3e4f9"
                }}
            >
                <StatusBar backgroundColor="#a3e4f9" barStyle="light-content" />
                <Content>
                    <Grid>
                        <Row
                            style={{
                                marginTop: 5,
                                height: 150
                            }}
                        >
                            <Price />
                        </Row>
                        <Row
                            style={{
                                marginTop: 15,

                                height: 150
                            }}
                        >
                            <Atmosphere />
                        </Row>
                        <Row
                            style={{
                                marginTop: 15,
                                height: 150
                            }}
                        >
                            <BrandPreference />
                        </Row>
                        <Row>
                            <Left
                                style={{
                                    marginTop: 10,
                                    marginBottom: 5
                                }}
                            >
                                <BackToPage2 lastPage={this.props.lastPage} />
                            </Left>
                            <Right
                                style={{
                                    marginTop: 10,
                                    marginBottom: 5
                                }}
                            >
                                <ToPage4 nextPage={this.props.nextPage} />
                            </Right>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
