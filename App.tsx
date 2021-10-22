import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Calendar, CalendarList, Agenda } from "react-native-calendars";
import { LocaleConfig } from "react-native-calendars";
import Day from "react-native-calendars/src/calendar/day";
import moment from "moment";

export default function App() {
  const [checkedDate, setCheckedDate] = useState([]);
  const [newCheckedDate, setNewCheckedDate] = useState();
  const [nextDates, setNextDates] = useState([]);
  console.log(nextDates, "nextDates");

  return (
    <View style={styles.container}>
      <Text>Theo dõi lịch xịt của Max</Text>
      <Calendar
        // current={"2021-10-21"}
        // minDate={"2021-10-21"}
        // maxDate={"2021-11-30"}
        firstDay={1}
        onDayPress={(day) => {
          setCheckedDate([...checkedDate, day.dateString]);
          setNewCheckedDate(day.dateString);
          //           let nextDate = moment(day.dateString)
          //             .add(2, "days")
          //             .format("YYYY-MM-DD");
          // setNextDates([...nextDates, nextDate, ])

          // let a = day.dateString;
          // let b = moment(day.dateString).add(10, "days").format("YYYY-MM-DD");

          for (let i = 1; i < 4; i++) {
            let a = 2 * i;
            let nextDate = moment(day.dateString)
              .add(a, "days")
              .format("YYYY-MM-DD");
            setNextDates([...nextDates, nextDate]);
          }
        }}
        
        markedDates={{
          [newCheckedDate]: {
            selected: true,
            marked: true,
            selectedColor: "blue",
          },
        }}
        style={{
          backgroundColor: "#F5F5F5",
          height: 330,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
