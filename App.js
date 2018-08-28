import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {
    Freshchat,
    FreshchatConfig,
    FaqOptions,
    ConversationOptions,
    FreshchatUser,
    FreshchatMessage,
    FreshchatNotificationConfig
} from 'react-native-freshchat-sdk';


export default class App extends Component {

    constructor(props) {
        super(props);
        this.initFreshChat();
    }

    initFreshChat = () => {
        const APP_ID = '3119218b-d363-4147-85c7-a252d69d1868';
        const APP_KEY = '514995c1-c1b0-478f-ac92-ca31e2f56a31';
        const freshchatConfig = new FreshchatConfig(APP_ID, APP_KEY);
        Freshchat.init(freshchatConfig);
    }

    setupUserFreshchat = () => {
        let freshchatUser = new FreshchatUser();
        freshchatUser.firstName = "Fachri";
        freshchatUser.lastName = "Naufal";
        freshchatUser.email = "fachrinfl@gmail.com";
        freshchatUser.phoneCountryCode = "+62";
        freshchatUser.phone = "821XXXXXXX";
        Freshchat.setUser(freshchatUser);
    }

    resetUserFreshchat = () => {
        Freshchat.resetUser();
    }

    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native Freshchat!</Text>
          <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => Freshchat.showFAQs()}
          >
              <Text>Open Freshchat FAQ</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={this.setupUserFreshchat}
          >
              <Text>Create User Freshchat</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={this.resetUserFreshchat}
          >
              <Text>Reset User Freshchat</Text>
          </TouchableOpacity>
          <TouchableOpacity
              style={{justifyContent: 'center', alignItems: 'center'}}
              onPress={() => Freshchat.showConversations()}
          >
              <Text>Show Conversation Freshchat</Text>
          </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    flexDirection: 'column'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});
