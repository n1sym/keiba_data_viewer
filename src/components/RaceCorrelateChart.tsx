import React from "react";
import { Bubble } from "react-chartjs-2";
import HorseRecord from "../../@types/HorseRecord";

function extract(horseRecordData: HorseRecord[], raceName: string) {
  let scatterData: any[] = [];
  let raceAhorseNames: string[] = [];
  const map = new Map();
  horseRecordData.forEach((data: HorseRecord) => {
    if (data.raceName == raceName){
      raceAhorseNames.push(data.horseName)
      map.set(data.horseName, data.rank)
    }
  })

  horseRecordData.forEach((data: HorseRecord) => {
    if (data.raceName == "NHKマイルC(G1)" && raceAhorseNames.includes(data.horseName)){
      const x = map.get(data.horseName);
      const y = data.rank
      if (y !== 99 && x != 99){
        scatterData.push({x: x, y: y, r: 1})
      }
    }
    

  });
  scatterData.forEach((data)=>{
    scatterData.forEach((data2)=>{
      if (data.x === data2.x && data.y === data2.y) {
        data.r = data.r + 1
        data2.r = data2.r + 1
      }
    })
  })

  return scatterData;
}

function wrapper(horseRecordData: HorseRecord[], raceName: string) {
  const datas = extract(horseRecordData, raceName);
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
      min: 0,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function(value: any) {
            return value + '着';
        }
      }
    }
  },
};

export const RaceCorrelateChart = (props: {
  horseRecordData: HorseRecord[];
  raceName: string;
}) => (
  <div>
    <h2>{props.raceName}</h2>
    <Bubble
      data={wrapper(props.horseRecordData, props.raceName)}
      width={400}
      height={300}
      type="bubble"
      options={options}
    />
  </div>
);
