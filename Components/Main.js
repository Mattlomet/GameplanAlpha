import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";
import { Container } from "native-base";
import FirstPageMain from "./FirstPageInputs/FirstPageMain.js";
import SecondPageMain from "./SecondPageInputs/SecondPageMain.js";
import ThirdPageMain from "./ThirdPageSliders/ThirdPageMain.js";

export default class Main extends Component {
    constructor() {
        super();
        this.state = {
            page: "firstPage",
            location: "",
            radius: "",
            occasion: "",
            time: "",
            groupDate: "",
            amountOfGuests: "",
            groupName: "",
            atmosphere: "",
            brandPreference: "",
            price: 0
        };
        this.goToPage1 = this.goToPage1.bind(this);
        this.goToPage2 = this.goToPage2.bind(this);
        this.goToPage3 = this.goToPage3.bind(this);
        this.pickLocation = this.pickLocation.bind(this);
        this.pickOccasion = this.pickOccasion.bind(this);
        this.pickRadius = this.pickRadius.bind(this);
        this.pickTime = this.pickTime.bind(this);
        this.pickDate = this.pickDate.bind(this);
        this.pickAmountOfGuests = this.pickAmountOfGuests.bind(this);
        this.pickGroupName = this.pickGroupName.bind(this);
        this.pickAtmosphere = this.pickAtmosphere.bind(this);
        this.pickBrandPreference = this.pickBrandPreference.bind(this);
        this.pickPrice = this.pickPrice.bind(this);
    }
    render() {
        if (this.state.page == "firstPage") {
            return (
                <View
                    style={{
                        height: 600
                    }}
                >
                    <FirstPageMain
                        Location={this.state.location}
                        Radius={this.state.radius}
                        Occasion={this.state.occasion}
                        Time={this.state.time}
                        GroupDate={this.state.groupDate}
                        pickLocation={this.pickLocation}
                        pickRadius={this.pickRadius}
                        pickOccasion={this.pickOccasion}
                        pickTime={this.pickTime}
                        pickDate={this.pickDate}
                        nextPage={this.goToPage2}
                    />
                </View>
            );
        } else if (this.state.page == "secondPage") {
            return (
                <View
                    style={{
                        height: 600
                    }}
                >
                    <SecondPageMain
                        Location={this.state.location}
                        Radius={this.state.radius}
                        Occasion={this.state.occasion}
                        Time={this.state.time}
                        GroupDate={this.state.groupDate}
                        GroupName={this.state.groupName}
                        GuestNumber={this.state.amountOfGuests}
                        pickAmountOfGuests={this.pickAmountOfGuests}
                        pickGroupName={this.pickGroupName}
                        lastPage={this.goToPage1}
                        nextPage={this.goToPage3}
                    />
                </View>
            );
        } else if (this.state.page == "thirdPage") {
            return (
                <ThirdPageMain
                    pickAtmosphere={this.pickAtmosphere}
                    pickPrice={this.pickPrice}
                    pickBrandPreference={this.pickBrandPreference}
                    lastPage={this.goToPage2}
                    nextPage={this.goToPage4}
                />
            );
        }
    }
    goToPage1() {
        this.setState({ page: "firstPage" });
    }
    goToPage2() {
        this.setState({ page: "secondPage" });
    }
    goToPage3() {
        this.setState({ page: "thirdPage" });
    }
    goToPage4() {
        this.setState({ page: "fourthPage" });
    }
    pickLocation(event) {
        this.setState({ location: event });
    }
    pickRadius(event) {
        this.setState({ radius: event });
    }
    pickOccasion(event) {
        this.setState({ occasion: event });
    }
    pickTime(event) {
        this.setState({ time: event });
    }
    pickDate(event) {
        this.setState({ groupDate: event });
    }
    pickAmountOfGuests(event) {
        this.setState({ amountOfGuests: event });
    }
    pickGroupName(event) {
        this.setState({ groupName: event });
    }
    pickAtmosphere(event) {
        this.setState({ atmosphere: event.target.value });
    }
    pickBrandPreference(event) {
        this.setState({ brandPreference: event.target.value });
    }
    pickPrice(event) {
        this.setState({ price: event.target.value });
    }
}
