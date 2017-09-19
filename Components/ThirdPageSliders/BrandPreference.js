import React, { Component } from "react";
import { StyleSheet, Text, View, Slider } from "react-native";
import {
    Container,
    Header,
    Content,
    Form,
    Item,
    Input,
    Icon,
    Left,
    Right,
    Grid,
    Card,
    CardItem
} from "native-base";

export default class Atmosphere extends Component {
    constructor() {
        super();
        this.state = {
            value: 50
        };
    }
    render() {
        return (
            <Card style={styles.container}>
                <CardItem header>
                    <Text>Brand Preference:</Text>
                </CardItem>
                <CardItem>
                    <Content>
                        <Slider
                            minimumValue={1}
                            maximumValue={100}
                            value={this.state.value}
                            onValueChange={value => this.setState({ value })}
                        />
                        <Grid>
                            <Left>
                                <Text>Hidden Gem</Text>
                            </Left>
                            <Right>
                                <Text>National</Text>
                            </Right>
                        </Grid>
                    </Content>
                </CardItem>
            </Card>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: "stretch",
        justifyContent: "center"
    }
});
