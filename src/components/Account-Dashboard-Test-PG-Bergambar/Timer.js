import React from 'react';
import '../Account-Dashboard-Test-Online-Soal-PG/TestOnlineSoalPGCSS.css'
import {ProgressBar, Container} from 'react-bootstrap'

export default class Timer extends React.Component {
    constructor() {
      super();
      this.state = { time: {}, seconds: 60 };
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

    componentWillUpdate(props , state){
        if (this.props.next === true){
            let seconds = 60;
            this.setState({
                time: this.secondsToTime(seconds),
                seconds: seconds,
            });
            this.props.timeOut(false)
        }
        if (this.state.seconds === 3){
            this.props.timeOut(true);
            this.props.soal(1)
            this.props.newSoal(true)
            this.props.submit(true)
        }
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
    var timer = 'timer-green';
    var variant = 'success';

    if ((this.state.time.s <= 30) && (this.state.time.s > 10)) {
      timer = 'timer-yellow';
      variant = 'warning';
    } else if ((this.state.time.s <= 10) && (this.state.time.s >= 0)) {
      timer = 'timer-red';
      variant = 'danger';
    }
      return(
        <div>
            <p className='timer'>{this.state.time.s}</p>
            <span className={timer}></span>
            <ProgressBar className='progress' now={this.state.time.s*1.666666666666667} variant={variant}/>
        </div>
      );
    }
  }