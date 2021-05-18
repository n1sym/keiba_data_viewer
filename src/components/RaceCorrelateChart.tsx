import React from "react";
import { Bubble } from "react-chartjs-2";
import HorseRecord from "../../@types/HorseRecord";
import { Text, Stack } from "@chakra-ui/react";

function extract(
  horseRecordData: HorseRecord[],
  raceName: string,
  baseRaceName: string
) {
  let scatterData: any[] = [];
  let raceAhorseNames: string[] = [];
  const map = new Map();
  horseRecordData.forEach((data: HorseRecord) => {
    if (data.raceName == raceName) {
      raceAhorseNames.push(data.horseName);
      map.set(data.horseName, data.rank);
    }
  });

  horseRecordData.forEach((data: HorseRecord) => {
    if (
      data.raceName == baseRaceName &&
      raceAhorseNames.includes(data.horseName)
    ) {
      const x = map.get(data.horseName);
      const y = data.rank;
      if (y !== 99 && x != 99) {
        scatterData.push({ x: x, y: y, r: 1 });
      }
    }
  });
  scatterData.forEach((data) => {
    scatterData.forEach((data2) => {
      if (data.x === data2.x && data.y === data2.y) {
        data.r = data.r + 1;
        data2.r = data2.r + 1;
      }
    });
  });

  return scatterData;
}

function wrapper(
  horseRecordData: HorseRecord[],
  raceName: string,
  baseRaceName: string
) {
  const datas = extract(horseRecordData, raceName, baseRaceName);
  const data = {
    datasets: [
      {
        label: "A dataset",
        data: datas,
        backgroundColor: "rgba(255, 99, 132, 1)",
        pointStyle: "rect",
      },
    ],
  };
  return data;
}

function numberData(
  horseRecordData: HorseRecord[],
  raceName: string,
  baseRaceName: string
) {
  let raceAhorseNames: string[] = [];
  const map = new Map();
  const matome = [0, 0, 0, 0];
  const topMatome = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];
  horseRecordData.forEach((data: HorseRecord) => {
    if (data.raceName == raceName) {
      raceAhorseNames.push(data.horseName);
      map.set(data.horseName, data.rank);
    }
  });

  horseRecordData.forEach((data: HorseRecord) => {
    if (
      data.raceName == baseRaceName &&
      raceAhorseNames.includes(data.horseName)
    ) {
      const x = map.get(data.horseName);
      const y = data.rank;
      if (y == 1) {
        matome[0] = matome[0] + 1;
      } else if (y == 2) {
        matome[1] = matome[1] + 1;
      } else if (y == 3) {
        matome[2] = matome[2] + 1;
      } else {
        matome[3] = matome[3] + 1;
      }
      if (x == 1) {
        if (y == 1) {
          topMatome[0][0] = topMatome[0][0] + 1;
          topMatome[1][0] = topMatome[1][0] + 1;
        } else if (y == 2) {
          topMatome[0][1] = topMatome[0][1] + 1;
          topMatome[1][1] = topMatome[1][1] + 1;
        } else if (y == 3) {
          topMatome[0][2] = topMatome[0][2] + 1;
          topMatome[1][2] = topMatome[1][2] + 1;
        } else {
          topMatome[0][3] = topMatome[0][3] + 1;
          topMatome[1][3] = topMatome[1][3] + 1;
        }
      } else if (x == 1 || x==2 || x==3){
        if (y == 1) {
          topMatome[1][0] = topMatome[1][0] + 1;
        } else if (y == 2) {
          topMatome[1][1] = topMatome[1][1] + 1;
        } else if (y == 3) {
          topMatome[1][2] = topMatome[1][2] + 1;
        } else {
          topMatome[1][3] = topMatome[1][3] + 1;
        }
      }
    }
  });
  const matomeArrange = pecentArrange(matome)
  const matome1Arrange = pecentArrange(topMatome[0])
  const matome2Arrange = pecentArrange(topMatome[1])

  return [matomeArrange, matome1Arrange, matome2Arrange]
}

function pecentArrange(matome: number[]){
  return percentCalc(matome)
  .map((num, index) => {
    if (index < 4) {
      return num;
    } else {
      const str = String(num) + "%";
      return str;
    }
  })
  .join("-");
  
}

function percentCalc(matome: number[]) {
  let all = matome.reduce((sum, element) => {
    return sum + element;
  });
  if (all == 0){
    all = 1
  }
  const perc1 = (matome[0] / all) * 100;
  const perc2 = ((matome[0] + matome[1]) / all) * 100;
  const perc3 = ((matome[0] + matome[1] + matome[2]) / all) * 100;
  matome.push(Math.round(perc1));
  matome.push(Math.round(perc2));
  matome.push(Math.round(perc3));
  return matome;
}

const options = {
  scales: {
    y: {
      min: 0,

      reverse: true,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: any) {
          return value + "着";
        },
      },
    },
    x: {
      min: 0,
      ticks: {
        // Include a dollar sign in the ticks
        callback: function (value: any) {
          return value + "着";
        },
      },
    },
  },
};

export const RaceCorrelateChart = (props: {
  horseRecordData: HorseRecord[];
  raceName: string;
  baseRaceName: string;
}) => (
  <div>
    <h2>{props.raceName}</h2>
    <Stack>
    <Text>
      1位：
      {numberData(props.horseRecordData, props.raceName, props.baseRaceName)[1]}
    </Text>
    <Text>
      1-3位：
      {numberData(props.horseRecordData, props.raceName, props.baseRaceName)[2]}
    </Text>
    <Text>
      総合：
      {numberData(props.horseRecordData, props.raceName, props.baseRaceName)[0]}
    </Text>
    </Stack>
    
    <Bubble
      data={wrapper(props.horseRecordData, props.raceName, props.baseRaceName)}
      width={400}
      height={300}
      type="bubble"
      options={options}
    />
  </div>
);
