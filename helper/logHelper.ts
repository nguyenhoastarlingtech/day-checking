import Reactotron from "reactotron-react-native";

/**
 * custom console log
 * chi show log khi trang thai la DEBUG (=true)
 *
 * @memberof AppComponent
 */
export const consoleLog = (...str1: any) => {
  // console.log(settings.FOR_DEV, 'logEnabled');
  Reactotron.log(str1);
};
