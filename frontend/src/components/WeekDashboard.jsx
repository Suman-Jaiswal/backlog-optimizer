import React, { useEffect, useState } from 'react'

export default function WeekDashboard() {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
    ]
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('http://127.0.0.1:8000', {
            method: "GET",
            headers: { "content-type": "application/json" },
        })
            .then(res => res.json())
            .then(res => setData(res))
            .catch(e => console.log(e))
    }, [])

    console.log(data)
    return (
        <div className="container mt-3">
        <div className="row">
            {
                days.map((day, i) =>
                    <div className="col" key={i}>

                        <h4 className='display-6 p-3'>
                            {day}
                        </h4>
                        <div className="container my-3" style={{ height: '60vh' }}>
                            {
                                data.length > 0 ? data.map(doc => {
                                    if (doc.day.includes(day)) {
                                        return (
                                            <div key={doc.id} >
                                                {doc.code} {doc.name_of_course}
                                            </div>
                                        )
                                    }
                                    else return null

                                }) : null
                            }
                        </div>

                    </div>
                )
            }
        </div>
    </div>
    )
}
