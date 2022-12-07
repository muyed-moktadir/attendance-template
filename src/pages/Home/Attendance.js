import React from 'react'

const Attendance = () => {

  const data =[
    
      {
        "id": "638f6abfa4f96537733d752f",
        "name": "Pat",
        "status": "Hicks"
      },
      {
        "id": "638f6abf539ce9264931460a",
        "name": "Fannie",
        "status": "Brooks"
      },
      {
        "id": "638f6abf01d00d9e9cefcefc",
        "name": "Mandy",
        "status": "Ramos"
      },
      {
        "id": "638f6abfbe50d29eefa9c21c",
        "name": "Milagros",
        "status": "James"
      },
      {
        "id": "638f6abfe2570444955adf5e",
        "name": "Lela",
        "status": "Hooper"
      }
    
  ]

  return (
    <div className="overflow-x-auto mt-14">
      <table className="table w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th>Name</th>
            <th>Job</th>
            <th>Favorite Color</th>
          </tr>
        </thead>
        <tbody>
          {/* <!-- row 1 --> */}
          {
            data.map(d=>
              <tr>
              <td>{d.id}</td>
              <td>{d.name}</td>
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