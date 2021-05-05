import React from 'react';
import {Bar} from 'react-chartjs-2';
import RaceData from '../../@types/RaceData'

function extract(raceData: RaceData[]){
  let frameNumTotals = [0,0,0,0,0,0,0,0]

  raceData.forEach((data: RaceData)=>{
    const frameNum = data.frameNumber
    frameNumTotals[frameNum-1] = frameNumTotals[frameNum-1] + 1
  })

  return frameNumTotals
}

function wrapper(raceData:RaceData[]){
  const frameNums = extract(raceData)
  const data = {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    datasets: [{
      label: 'total',
      data: frameNums,
      borderWidth: 1
    }]
  }
  return data
}

const options = {
  scales: {
    y: {
      min: 0,
    },
  },
};

export const FrameNumBar = (props: {raceData: RaceData[], title?: string}) => (
<div>
        <h2>{props.title}</h2>
        <Bar
          data={wrapper(props.raceData)}
          options={options}
        />
      </div>
)
