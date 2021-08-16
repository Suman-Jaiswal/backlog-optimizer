import React, { useEffect, useState } from 'react'

export default function AddWeekBtn() {

    // const [weekDays, setWeekDays] = useState([])
    // const [weekNo, setWeekNo] = useState(Number)

    // const handleChange = (e) => {
    //     setWeekNo(Number(e.target.value))
    // }

    // const addDaysToWeek = (sno) => {
    //     for (let i = 0; i < days.length; i++) {
    //         const day = days[i];
    //         database.weekdays.add({
    //             index: i,
    //             weekNo: sno,
    //             day,
    //         })
    //     }
    // }

    // const addWeek = () => {
    //     const sno = weekNo
    //     addDaysToWeek(sno)
    // }

    // useEffect(() => {
    //     database.weekdays.where('weekNo', '==', 1)
    //         .orderBy('index')
    //         .onSnapshot(weeks => {
    //             setWeekDays(weeks.docs.map(database.formatDoc))
    //         })
    // }, [weekDays])

    return (
        <div>
            <button className='btn btn-success'  >Add Week</button>
        </div>
    )
}
