import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Table from './Table';

const Form = () => {
    const initialState = {
        reminder: "",
        date: ""
    }
    const [reminderData, setReminderData] = useState({ ...initialState })
    const [tableData, setTableData] = useState([])
    const initialTime = {
        days: 0,
        hours: 0,
        minutes: 0
    }
    const [time, setTime] = useState({ ...initialTime })
    const [flag,setFlag] = useState(0)
    const handleChange = (e) => {
        setReminderData({ ...reminderData, reminder: e.target.value })
    };

    const handleDifference = (date) => {
        let currentDate = new Date();
        if(currentDate > date) {
            // flag = 1 elapsed
            // flag = 0 upcoming
            setFlag(1);
        }
        else{
            setFlag(0);
        }
        console.log("flag",flag);
        let difference = Math.abs(currentDate - date) / 1000 //JS timestamps are measured in milliseconds
        let days = Math.floor(difference / 86400); // 24*60*60 seconds in a day
        difference -= days * 86400;
        let hours = Math.floor(difference / 3600) % 24;
        difference -= hours * 3600;
        let minutes = Math.floor(difference / 60) % 60;

        console.log("days" , days);
        // console.log("hours" , hours);
        // console.log("minutes" , minutes);
        setTime({
            days: days,
            hours: hours,
            minutes: minutes
        })
    }


    function addReminder(e) {
        e.preventDefault();
        const checkEmptyInput = !Object.values(reminderData).every(result => result === "");
        if (checkEmptyInput) {
            const newData = (data) => ([...data, reminderData]);
            setTableData(newData);
            handleDifference(reminderData.date);
            setReminderData({ ...initialState });
            //     console.log("tableData",{...tableData});
            //     console.log("reminderData",{...reminderData});
        }
    }
    return (<form>
        <div>
            <input
                type="text"
                placeholder="Create Reminder"
                value={reminderData.reminder}
                onChange={e => { handleChange(e) }} />
        </div>
        <div>
            <DateTimePicker
                value={reminderData.date}
                onChange={date => setReminderData({ ...reminderData, date: date })} />
        </div>
        <div className='reminder'>
            <button onClick={addReminder} >ADD Reminder</button>
        </div>
        <div className='clear'>
            <button>CLEAR ALL</button>
        </div>
        <div>
            <Table tableData={tableData} time={time} flag={flag}/>
        </div>
    </form>)
}
export default Form