/**
 * @format
 */

import { AppRegistry } from "react-native";
import App from "./App";
import { name as appName } from "./app.json";

import ThemeProvider from "react-native-elements";

// <ThemeProvider theme={theme}>

AppRegistry.registerComponent(appName, () => App);
