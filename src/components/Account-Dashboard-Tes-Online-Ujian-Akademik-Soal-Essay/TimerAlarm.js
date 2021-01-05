import React from 'react'
import {ProgressBar} from 'react-bootstrap'
import './AccountDashboardUjianAkademikEssay.css'

class TimerAlarm extends React.Component {
    constructor() {
        super()
        this.state = {
            time: {},
            seconds: 60
        }
        this.timer = 0
        this.countDown = this.countDown.bind(this)
    }

    changeSeconds(secs) {
        let hours = Math.floor(secs/(3600)) // hour
        let minutesRemain = secs % (3600) // minutes remain
        let minutes = Math.floor(minutesRemain/60) // minutes
        let secondsRemain = minutesRemain % 60
        let seconds = Math.ceil(secondsRemain) // seconds

        let obj = {
            "h": hours,
            "m": minutes,
            "s": seconds
        }
        return obj;
    }

    componentDidMount() {
        let timeRemaining = this.changeSeconds(this.state.seconds)
        this.setState({
            time: timeRemaining
        })
        this.timer = setInterval(this.countDown, 1000)
    }

    countDown() {
        let seconds = this.state.seconds - 1;
        this.setState({
            time: this.changeSeconds(seconds),
            seconds: seconds
        })

        if (seconds == 0) {
            clearInterval(this.timer)
            this.gantiConditionSave()
        }
    }

    gantiConditionSave() {
        this.props.switch(true)
    }

    render() {
        var timer = 'green-alarm'
        var variant = 'success'

        if ((this.state.time.s <= 30) && (this.state.time.s > 10)) {
            timer = 'yellow-alarm';
            variant = 'warning'
        }
        else if ((this.state.time.s <= 10) && (this.state.time.s >= 0)) {
            timer = 'red-alarm'
            variant = 'danger'
        }

        return (
            <div>
                <p className='timer'>{this.state.time.s}</p>
                <span className={timer}></span>
            </div>
            
        )
    }
}

export default TimerAlarm