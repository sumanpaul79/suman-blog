import React,{useState,useEffect} from "react"
import {fetchDailyData} from "../../Api"
import { Line, Bar } from 'react-chartjs-2'
import styles from "./Chart.module.css"
function Chart({data,country}){

  const [dailyData, setDailyData]= useState([])

  useEffect(()=>{
const fetchApi =async()=>{
  setDailyData(await fetchDailyData())
}
fetchApi()
},[])

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

  const barChart=(
    data.confirmed ?(
    <Bar
    data={{
    labels:['Infected','Recovered','Deaths'],
    datasets:[{
      label:'People',
      backgroundColor:['#0000FF', '#008000', '#FF0000'],
      data:[data.confirmed.value,data.recovered.value,data.deaths.value]
    }]
    }}
    options={{
      legend:{display:false},
      title:{display:true,text:`Current Status in ${country}`}
    }}
    />
  ):null
  )
  return(
    <div className={styles.container}>
     {country? barChart:linechart} </div>
  )
}
export default Chart
