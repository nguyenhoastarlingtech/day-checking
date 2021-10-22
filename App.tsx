import React, { useEffect, useState } from "react";
import { Alert, Dimensions, StyleSheet, Text, View } from "react-native";
import { Calendar } from "react-native-calendars";
import moment from "moment";
import { DateData } from "react-native-calendars/src/types";

import "./config/ReactotronConfig";
import { consoleLog } from "./helper/logHelper";

export default function App() {
  const [checkedDate, setCheckedDate] = useState<string[]>([
    "2021-10-16",
    "2021-10-18",
    "2021-10-20",
  ]);

  const [newChecked, setNewChecked] = useState("");
  const [nextDates, setNextDates] = useState<string[]>([]);
  console.log(nextDates, "nextDates");

  useEffect(() => {
    //TODO: load init data
  }, []);

  //TODO: xu ly luu ngay da xit

  const onConfirm = (day: DateData) => {
    consoleLog("onConfirm");
    Alert.alert(
      moment(day.timestamp).format("DD [tháng] MM YYYY"),
      "Bạn xác nhận đây là ngày xịt tiếp theo?",
      [
        {
          text: "Đồng ý",
          onPress: () => onDayPress(day),
        },
        {
          text: "Để sau",
        },
      ]
    );
  };

  const onDayPress = (day: DateData) => {
    setNewChecked(day.dateString);
    // let b = moment(day.dateString).add(10, "days").format("YYYY-MM-DD");
    const d = moment(day.timestamp).endOf("month").fromNow();
    // consoleLog(d, "d");

    moment(day.timestamp).fromNow();

    const tmpNextDate: string[] = [];
    for (let i = 1; i <= 3 * 30; i++) {
      let a = 2 * i;
      let nextDate = moment(day.dateString).add(a, "days").format("YYYY-MM-DD");
      // setNextDates([...nextDates, nextDate]);
      tmpNextDate.push(nextDate);
    }
    setNextDates(tmpNextDate);
  };

  const getCheckedDate = () => {
    let tmpDate = {};
    checkedDate.map((item) => {
      tmpDate = {
        ...tmpDate,
        ...{
          [item]: {
            selected: true,
            marked: true,
            selectedColor: "green",
          },
        },
      };
    });
    return tmpDate;
  };

  const getNextDate = () => {
    let tmpDate = {};
    nextDates.map((item) => {
      tmpDate = {
        ...tmpDate,
        ...{
          [item]: {
            selected: true,
            marked: true,
            selectedColor: "orange",
          },
        },
      };
    });
    return tmpDate;
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textTransform: "uppercase",
        }}
      >
        Theo dõi lịch xịt của Max
      </Text>
      <View style={{ marginVertical: 32 }}>
        <Text style={{ fontSize: 16, fontWeight: "400" }}>
          Ngày xịt gần nhất:{" "}
          {newChecked ? moment(newChecked).format("DD [tháng] MM YYYY") : null}
        </Text>
      </View>
      <Calendar
        minDate={new Date()}
        firstDay={1}
        onDayPress={onConfirm}
        markedDates={{
          ...getCheckedDate(),
          ...{
            [newChecked]: {
              selected: true,
              marked: true,
              selectedColor: "blue",
            },
            ...getNextDate(),
          },
        }}
        style={{
          backgroundColor: "#F5F5F5",
          // height: 400,
          width: Dimensions.get("window").width,
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
