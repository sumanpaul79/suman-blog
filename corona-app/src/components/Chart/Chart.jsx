import React,{useState,useEffect} from "react"
import {fetchDailyData} from "../../Api"
import { Line, Bar } from 'react-chartjs-2'
import styles from "./Chart.module.css"
function Chart(){
  const [dailyData, setDailyData]= useState([])

  useEffect(()=>{
const fetchApi =async()=>{
  setDailyData(await fetchDailyData())
}
fetchApi()


})

  const linechart=(
    dailyData[0]?(
    <Line
    data={{
      labels: dailyData.map(({date})=> date),
      datasets:[{
        data:dailyData.map((data)=>data.confirmed),
        label: 'Infected',
         borderColor: '#3333ff',
        file:true,
      },{
        data:dailyData.map((data)=>data.deaths),
        label: "Deaths",
        borderColor:"red",
        backgroundColor:'#ff726f' ,
        fill:true,

      }]
    }}
    />):null
  )
  return(
    <div className={styles.container}>
     {linechart} </div>
  )
}
export default Chart
