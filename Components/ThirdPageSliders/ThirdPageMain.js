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
                    backgroundColor: "rgba(0, 194, 255, 0.25)"
                }}
            >
                <Content>
                    <Grid>
                        <Row
                            style={{
                                marginTop: 25,
                                height: 150
                            }}
                        >
                            <Price />
                        </Row>
                        <Row
                            style={{
                                marginTop: 25,

                                height: 150
                            }}
                        >
                            <Atmosphere />
                        </Row>
                        <Row
                            style={{
                                marginTop: 25,
                                height: 150
                            }}
                        >
                            <BrandPreference />
                        </Row>
                        <Row>
                            <Left>
                                <BackToPage2
                                    lastPage={this.props.lastPage}
                                    style={{
                                        width: 2,
                                        marginTop: 100,
                                        hieght: 1
                                    }}
                                />
                            </Left>
                            <Right>
                                <ToPage4
                                    nextPage={this.props.nextPage}
                                    style={{
                                        width: 2,
                                        marginTop: 100,
                                        hieght: 1
                                    }}
                                />
                            </Right>
                        </Row>
                    </Grid>
                </Content>
            </Container>
        );
    }
}
