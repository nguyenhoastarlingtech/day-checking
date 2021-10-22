import Reactotron from "reactotron-react-native";
import ReactotronFlipper from "reactotron-react-native/dist/flipper";
import { expo } from "../app.json";

Reactotron.configure({
  name: expo.name,
  createSocket: (path) => new ReactotronFlipper(path),
})
  .configure() // controls connection & communication settings
  // .configure({ host: "192.168.1.169" }) // controls connection & communication settings
  .useReactNative(); // add all built-in react native plugins
// .connect(); // let's connect!

// if (__DEV__) {
Reactotron.connect();
// }
