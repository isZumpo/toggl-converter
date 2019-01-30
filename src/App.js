import React, { Component } from 'react';
import CSVReader from 'react-csv-reader'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.handleCsvFile = this.handleCsvFile.bind(this)
    this.timeStampToStupidFormat = this.timeStampToStupidFormat.bind(this)
    this.getFormatedEntries = this.getFormatedEntries.bind(this)

    this.state = {
      entries: []
    }
  }

  render() {
    return (
      <div className="App">
        <CSVReader
          cssClass="csv-reader-input"
          onFileLoaded={this.handleCsvFile}
          inputId="ObiWan"
          inputStyle={{ color: 'red' }}
        />

        <textarea value={this.getFormatedEntries()} style={{ width: "50%", height: "400px" }}></textarea >
      </div>
    );
  }

  getFormatedEntries() {
    let entries = ""
    for (let entry of this.state.entries) {
      entries += entry.description + "\t" + entry.date + "\t" + entry.start.toFixed(5).replace(".", ",") + "\t" + entry.end.toFixed(5).replace(".", ",") + "\n"
    }
    return entries
  }

  timeStampToStupidFormat(timeStamp) {
    let time = timeStamp.split(":")
    let hour = parseFloat(time[0])
    let minutes = parseFloat(time[1])
    let seconds = parseFloat(time[2])
    return hour + (minutes + seconds / 60) / 60
  }

  handleCsvFile(csvFile) {
    // Remove first row containing labels, and last row which is empty
    csvFile.shift()
    csvFile.pop()

    let convertedEntries = []
    for (let entry of csvFile) {
      convertedEntries.push({
        description: entry[5],
        date: entry[7],
        start: this.timeStampToStupidFormat(entry[8]),
        end: this.timeStampToStupidFormat(entry[10])
      })
    }
    this.setState({ entries: convertedEntries })
  }
}

export default App;
