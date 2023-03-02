import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';
import Table from './Table';

const Form = () => {
    const initialState = {
        reminder: "",
        date: "",
        elapsed: true,
        days: 0,
        hours: 0,
        min: 0
    }
    const [reminderData, setReminderData] = useState({ ...initialState })
    const [tableData, setTableData] = useState([])

    const handleChange = (e) => {
        setReminderData({ ...reminderData, reminder: e.target.value })
    };

    const handleDifference = () => {
        let currentDate = new Date();
        const date = reminderData.date;
        let elapsedVal ;
        if(currentDate > date) elapsedVal = reminderData.elapsed;
        else elapsedVal = !reminderData.elapsed;

        let difference = Math.abs(currentDate - date) / 1000 //JS timestamps are measured in milliseconds
        let days = Math.floor(difference / 86400); // 24*60*60 seconds in a day
        difference -= days * 86400;
        let hours = Math.floor(difference / 3600) % 24;
        difference -= hours * 3600;
        let min = Math.floor(difference / 60) % 60;
        return ({ elapsed: elapsedVal ,days: days, hours: hours, min: min });
    }

    function addReminder(e) {
        e.preventDefault();
        const checkEmptyInput = !Object.values(reminderData).every(result => result === "");
        if (checkEmptyInput) {
            let details = handleDifference();
            let newReminderObj = {...reminderData , ...details} //merging objects 
            setReminderData({...newReminderObj})
            setTableData((prevData) => [...prevData,{...newReminderObj}]);
        }
        setReminderData({ ...initialState });
    }
    const lapsed = tableData.map((reminderInfo) => {
        return(reminderInfo.elapsed)
    })

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
            <Table tableData={tableData} lapsed={lapsed}/>
        </div>
    </form>)
}
export default Form