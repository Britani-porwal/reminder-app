const Table = ({ tableData, time, flag }) => {
    const tableRow = tableData.map((reminderInfo) => {
        return (<tr>
            <td>{reminderInfo.reminder}</td>
            <td>{(time.days > 0) ? time.days + "days": ((time.hours > 0) ? time.hours + "hrs" : time.minutes + "min")}{" "}{flag ? "ago" : ""}</td>
            <td>{reminderInfo.date.toDateString() + ", " + reminderInfo.date.toLocaleTimeString()}</td>
        </tr>)
    })
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
                <tbody>
                    {flag === 1 ? tableRow : ""}
                </tbody>
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
                <tbody>
                    {flag === 0 ? tableRow : ""}
                </tbody>
            </table>
        </span>
    </div>)
}
export default Table 