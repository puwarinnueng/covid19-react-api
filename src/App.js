import './App.css';
import React, { useState, useEffect } from 'react'
import Axios from 'axios'

function App() {
  const [api, setApi] = useState('')

  // useEffect(function () {
  //   fetch('https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR1kZUwE58s_rCaAYSVjKEEsBR8s_etUoXet-Sx_xibnmqxNzqHE39FHVss')
  //     .then(data => data.json())
  //     .then(data => setApi(data))
  //     .catch(err => console.log(err))
  // }, [])

  useEffect(() => {
    Axios.get('https://static.easysunday.com/covid-19/getTodayCases.json?fbclid=IwAR1kZUwE58s_rCaAYSVjKEEsBR8s_etUoXet-Sx_xibnmqxNzqHE39FHVss')
      .then(datas => setApi(datas.data))
      .catch(err => console.log(err))
  }, [])
  console.log(api)

  return (
    <div>
      <br></br>
      <div className="total">
      <h1 className="btn btn-success">เว็บไซต์เช็คยอดโควิด 19 โดยกูเอง หนึ่ง</h1>
      </div>
      
      <br></br>
      <ul className="total1">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          วันที่
          <span className="badge bg-primary rounded-pill">{api.UpdateDate}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          ผู้ติดเชื้อทั้งหมด
          <span className="badge bg-primary rounded-pill">{api.cases}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          จำนวนเคสในวันนี้
          <span className="badge bg-primary rounded-pill">{api.todayCases}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          จำนวนเคสร้ายแรง
          <span className="badge bg-primary rounded-pill">{api.critical}</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          รักษาหาย กลับบ้านวันนี้
          <span className="badge bg-primary rounded-pill">{api.todayRecovered}</span>
        </li>
      </ul><br></br>


      <div className="total">
      <h1 className="btn btn-danger">ยอดผู้เสียชีวิตวันนี้ {api.todayDeaths}</h1><br></br>
        <h1 className="btn btn-danger">ยอดผู้เสียชีวิตรวม {api.deaths}</h1>
      </div>
    </div>

  );
}

export default App;
