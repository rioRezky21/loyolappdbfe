import React from 'react';
import '../Account-Dashboard-Test-Online-Soal-PG/TestOnlineSoalPGCSS.css'

export default class Timer2 extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 5400 };
      this.timer = 0;
      this.countDown = this.countDown.bind(this);
    }
  
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
  
    componentDidMount() {
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
      this.timer = setInterval(this.countDown, 1000);
    }
  
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
      }
    }
  
    render() {
      return(
        <div>
          <p className='jam'>Jam ujian berakhir:<span className='waktu'>{this.state.time.h} jam : {this.state.time.m} menit</span></p>
        </div>
      );
    }
  }