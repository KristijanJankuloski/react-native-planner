import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Platform, StatusBar as PhoneStatusBar, Button, Image } from 'react-native';
import Header from './components/Header';
import DateTimePicker, { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

export default function App() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const dateFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };

  function selectStartDate(){
    DateTimePickerAndroid.open({value: startDate, onChange: (e, newDate) => setStartDate(newDate)});
  }

  function selectEndDate(){
    DateTimePickerAndroid.open({value: endDate, onChange: (e, newDate) => setEndDate(newDate)});
  }

  return (
    <View style={styles.container}>
      <Header />
      <ScrollView style={styles.mainContent}>
        <View style={styles.dateSelectionField}>
          <View>
            <View style={styles.datePickerLabel}>
              <Text style={{fontSize: 18}} >Start date</Text>
              <Image style={styles.datePickIcon} source={require('./assets/img/flight-takeoff.png')} />
            </View>
            <Button style={styles.dateSelectButton} title={startDate.toLocaleDateString('en-GB', dateFormatOptions)} onPress={selectStartDate} />
          </View>
          <View>
            <View style={styles.datePickerLabel}>
              <Text style={{fontSize: 18}} >End date</Text>
              <Image style={styles.datePickIcon} source={require('./assets/img/flight-land.png')} />
            </View>
            <Button style={styles.dateSelectButton} title={endDate.toLocaleDateString('en-GB', dateFormatOptions)} onPress={selectEndDate} />
          </View>
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#aacf76" style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android"? PhoneStatusBar.currentHeight : 0,
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "column"
  },
  mainContent: {
    backgroundColor: "#F8FFF8",
    flex: 1
  },
  dateSelectionField: {
    flexDirection: "row",
    gap: 5,
    padding: 5,
    justifyContent: 'space-around'
  },
  dateSelectButton: {
    padding: 5,
  },
  datePickerLabel: {
    flexDirection: "row",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  datePickIcon: {
    height: 30,
    width: 30
  }
});
