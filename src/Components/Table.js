const Table = ({ tableData, lapsed }) => {
    return (<div className="tables">
        <span><p>Past Reminders</p>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Elapsed</th>
                        <th>Due Date nd Time</th>
                    </tr>
                </thead>
                {tableData.map((reminderInfo) => {
                    if (reminderInfo.elapsed === true) {
                        return <tbody>
                            <tr key={new Date()}>
                                <td>{reminderInfo.reminder}</td>
                                <td>{(reminderInfo.days > 0) ? reminderInfo.days + "days" : ((reminderInfo.hours > 0) ? reminderInfo.hours + "hrs" : reminderInfo.minutes + "min")}{" "}{reminderInfo.elapsed ? "ago" : ""}</td>
                                <td>{reminderInfo.date.toDateString() + ", " + reminderInfo.date.toLocaleTimeString()}</td>
                            </tr>
                        </tbody>
                    }
                    else {
                        return <></>;
                    }
                })}
            </table>
        </span>
        <span><p>Future Reminders</p>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Get Ready</th>
                        <th>Due Date nd Time</th>
                    </tr>
                </thead>
                {tableData.map((reminderInfo) => {
                    if (reminderInfo.elapsed === false) {
                        return <tbody>
                            <tr key={new Date()}>
                                <td>{reminderInfo.reminder}</td>
                                <td>{(reminderInfo.days > 0) ? reminderInfo.days + "days" : ((reminderInfo.hours > 0) ? reminderInfo.hours + "hrs" : reminderInfo.minutes + "min")}{" "}{reminderInfo.elapsed ? "ago" : ""}</td>
                                <td>{reminderInfo.date.toDateString() + ", " + reminderInfo.date.toLocaleTimeString()}</td>
                            </tr>
                        </tbody>
                    }
                    else {
                        return <></>;
                    }
                })}
            </table>
        </span>
    </div>)
}
export default Table 