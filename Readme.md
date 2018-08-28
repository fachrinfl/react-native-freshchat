<h2 align="center">
  <br /><br />
  React Native Freshchat
  <br />
</h2>


<img src="https://user-images.githubusercontent.com/28708584/44704754-bdd68800-aac6-11e8-8e82-655ad9792963.png" width="280" />

## Overview

1. **[Installation](#1-installation)**
2. **[Setup](#2-setup)**
3. **[Running](#3-running)**

## 1. Installation

Clone react native freshchat
```aidl
git clone https://github.com/fachrinfl/react-native-freshchat.git
cd react-native-freshchat
```

## 2. Setup

Before run the project setup the library
1. Download library in [`react-native-freshchat-sdk`](https://rnfreshchatsdk.firebaseapp.com/)
2. Extract react-native-freshchat-sdk and place it inside node_module folder in your project
3. Add "react-native-freshchat-sdk": "^0.4.0" under dependencies in project package.json
4. Run react-native link on you project root directory


Add Manually `react-native-freshchat-sdk` in Android
- in `android/settings.gradle`
```
...
include ':react-native-freshchat-sdk'
project(':react-native-freshchat-sdk').projectDir = new File(settingsDir, '../node_modules/react-native-freshchat-sdk/android')
```

- in `android/app/build.gradle` add:
```
dependencies {
    ...
    compile project(':react-native-freshchat-sdk')
}
```

- and finally, in `android/src/main/java/com/{YOUR_APP_NAME}/MainApplication.java`
```java
//...
import com.freshchat.consumer.sdk.react.RNFreshchatSdkPackage; // <--- This!
//...
@Override
protected List<ReactPackage> getPackages() {
  return Arrays.<ReactPackage>asList(
    new MainReactPackage(),
    new RNFreshchatSdkPackage() // <---- and This!
  );
}
```

## 3. Running
```aidl
react-native run-android
```
