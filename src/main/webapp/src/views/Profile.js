import React from "react";
import {TabPanel, TabView} from "primereact/tabview";
import { Avatar } from "primereact/avatar";

import DrinkList from "../components/DrinkList.js";

import "./Profile.css";

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            tabHashes: ["info", "mydrinks", "upvoted"]
        }
    }

    // Changes the active tab and updates the hash in url
    changeTab = (e) => {
        this.setState({activeTab: e.index});
        window.location.hash = this.state.tabHashes[e.index];
    }

    componentDidMount = () => {
        // Change the active tab if a hash is included in url
        if (window.location.hash) {
            this.setState({activeTab: this.state.tabHashes.indexOf(window.location.hash.substring(1))});
        }
    }

    jsonAuthHandler = (e, apiURL) => {
        if (localStorage.getItem("currentUser") != null) {
            const requestOptions = {
                method: 'POST',
                credentials: 'include',
                headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${JSON.parse(localStorage.getItem("currentUser")).token}`},
                body: JSON.stringify(e)
            };

            fetch(process.env.REACT_APP_API_URL + apiURL, requestOptions)
                    .then(response => {
                        console.log(response);
                    })
        } else {
            console.log("Oi! reg or login!");

        }
    }

    render() {

        return (
                <div className="profile-page">
                    <div className="p-d-flex p-m-2 p-ai-center">
                        <Avatar className="p-mr-2" icon="pi pi-user" size="xlarge" shape="circle" />
                        <h1>{this.props.user}</h1>
                    </div>
                    <TabView activeIndex={this.state.activeTab} onTabChange={(e) => this.changeTab(e)}>
                        <TabPanel onClick={() => window.location.hash = "info"} header="Info">
                            <div className="user-details">
                                <div className="p-d-flex p-ai-baseline">
                                    <h3><i className="pi pi-calendar"></i> Member since</h3>
                                    <p className="user-details p-ml-2">February 2021</p>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel onClick={(e) => this.jsonAuthHandler(e, "/drinks/mydrinks/")} header="My Drinks">
                            <DrinkList fetchType="/drinks/mydrinks/"></DrinkList>
                        </TabPanel>
                        <TabPanel onClick={(e) => this.jsonAuthHandler(e, "/drinks/upvoted/")} header="Upvoted">
                            <DrinkList fetchType="/drinks/upvoted/"></DrinkList>
                        </TabPanel>
                    </TabView>
                </div>
                )
    }

}
