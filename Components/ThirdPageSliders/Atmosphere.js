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
    Grid
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
            <View style={styles.container}>
                <Content>
                    <Text>Atmosphere:</Text>
                    <Slider
                        minimumValue={1}
                        maximumValue={100}
                        value={this.state.value}
                        onValueChange={value => this.setState({ value })}
                        trackStyle={{
                            color: "#320fdb",
                            backgroundColor: "#320fdb"
                        }}
                        thumbStyle={{
                            color: "#320fdb",
                            backgroundColor: "#320fdb"
                        }}
                    />
                    <Grid>
                        <Left>
                            <Text>Casual</Text>
                        </Left>
                        <Right>
                            <Text>Formal</Text>
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
var customStyles2 = StyleSheet.create({
    track: {
        height: 4,
        borderRadius: 2
    },
    thumb: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        backgroundColor: "white",
        borderColor: "#30a935",
        borderWidth: 2
    }
});
