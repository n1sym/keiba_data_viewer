import React from "react";
import { Bubble } from "react-chartjs-2";
import RaceData from "../../@types/RaceData";

function extract(raceData: RaceData[]) {
  let scatterData: any[] = [];

  raceData.forEach((data: RaceData) => {
    const x = data.horseWeightDiff;
    const y = data.rank
    if (y !== 99){
      scatterData.push({x: x, y: y, r: 1})
    }
  });
  scatterData.forEach((data)=>{
    scatterData.forEach((data2)=>{
      if (data.x === data2.x && data.y === data2.y) {
        data.r = data.r + 2
        data2.r = data2.r + 2
      }
    })
  })

  return scatterData;
}

function wrapper(raceData: RaceData[]) {
  const datas = extract(raceData);
  const data = {
    datasets: [
      {
        label: "A dataset",
        data: datas,
        backgroundColor: "rgba(255, 99, 132, 1)",
        pointStyle: 'rect'
      },
    ],
  };
  return data;
}

const options = {
  scales: {
    y: {
      min: 0,
      
      reverse: true,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function(value: any) {
            return value + '着';
        }
    }
    },
    x: {
      min: -15,
      max: 15,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function(value: any) {
            return value + 'kg';
        }
      }
    }
  },
};

export const ScatterChart = (props: {
  raceData: RaceData[];
  title?: string;
}) => (
  <div>
    <h2>{props.title}</h2>
    <Bubble
      data={wrapper(props.raceData)}
      width={400}
      height={300}
      type="bubble"
      options={options}
    />
  </div>
);
