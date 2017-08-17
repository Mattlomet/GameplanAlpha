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
    Grid,
    Right,
    Left
} from "native-base";

export default class Price extends Component {
    constructor() {
        super();
        this.state = {
            value: 50
        };
    }
    render() {
        return (
            <View style={styles.container}>
                <Content>
                    <Text>Price:</Text>
                    <Slider
                        minimumValue={1}
                        maximumValue={100}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                    />
                    <Grid>
                        <Left>
                            <Text>$</Text>
                        </Left>
                        <Right>
                            <Text>$$$$</Text>
                        </Right>
                    </Grid>
                </Content>
            </View>
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
