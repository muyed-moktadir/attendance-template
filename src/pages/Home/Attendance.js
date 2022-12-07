import React from 'react'

const Attendance = () => {

  const data =[
    
      {
        "id": "638f6abfa4f96537733d752f",
        "date": "12/7/2022",
        "status": "Present",
        "employee_name": "Hicks"

      },
      {
        "id": "638f6abf539ce9264931460a",
        "date": "12/7/2022",
        "status": "Present",
        "employee_name": "slamon"
      },
      {
        "id": "638f6abf01d00d9e9cefcefc",
        "date": "12/7/2022",
        "status": "Present",
        "employee_name": "Hicks"
      },
      {
        "id": "638f6abfbe50d29eefa9c21c",
        "date": "12/7/2022",
        "status": "Present",
        "employee_name": "ronn"
      },
      {
        "id": "638f6abfe2570444955adf5e",
        "date": "12/7/2022",
        "status": "Present",
        "employee_name": "Hicks"
      }
    
  ]

  return (
    <div className="overflow-x-auto w-[100%] border- mt-20"> 
    <h1 className=' text-center text-5xl font-bold mb-10'>Attendance</h1>
      <table className="table mx-auto w-[60%]  ">
        {/* <!-- head --> */}
        <thead >
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
            data.map((d,index)=>
              <tr>
              <td>{d.date}</td>
              <td>{d.employee_name}</td>
              <td>{d.status}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Attendance