import { Table, Thead, Tbody, Tr, Th, Td, Box, Text, Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup, } from "@chakra-ui/react";
import Link from "next/link";

export const GeneralTable = (props: { result: any[] }) => (
  <>
  <Box overflowX={{base:"auto", sm:"auto", md: "auto"}} w={320} py={6} px={2}>
    {totalNum(props.result)}
  </Box>
  <Box overflowX={{base:"auto", sm:"auto", md: "auto"}} pb={12} maxW={1200}>
  <Table size="sm" mt={2}>
    <Thead>
      <Tr>
        <Th>開催日</Th>
        <Th>開催レース</Th>
        <Th>収支</Th>
        <Th>購入レース数</Th>
        <Th>的中数</Th>
        <Th>的中率</Th>
        <Th>回収率</Th>
      </Tr>
    </Thead>
    <Tbody>
      {props.result.map((item: any, index: number) => {
        return displayThColor(index, item);
      })}
    </Tbody>
  </Table>
  </Box>
  </>
);

const totalNum = (result: any) => {
  const count = result.map((item: any)=>{if (item.count != "-"){return Number(item.count)}}).reduce((prev: number, current:number)=>{return prev+current;}) * 100
  const totalTan = result.map((item: any)=>{if (item.total != "-"){return Number(item.total)}}).reduce((prev: number, current:number)=>{return prev+current;})
  const recTan = Math.round(((count + totalTan) / count)*10000)/100
  const recTanStr = String(recTan) + "%"
  const totalTanPrevArray = result.map((item: any)=>{if (item.total != "-"){return Number(item.total)}}).reverse()
  totalTanPrevArray.pop()
  const totalTanPrev = totalTanPrevArray.reduce((prev: number, current:number)=>{return prev+current;})
  const countPrev = (count/100 - Number(result[0].count))*100
  const recTanPrev = Math.round(((countPrev + totalTanPrev) / countPrev)*10000)/100
  const recTanPrevStr = String(recTan - recTanPrev) + "%"

  return (
    <>
    <StatGroup>
      <Stat>
        <StatLabel>Total</StatLabel>
        <StatNumber>{totalTan}</StatNumber>
        <StatHelpText>
        <StatArrow type={statArrow(result[0].total)} />
          {result[0].total}
        </StatHelpText>
      </Stat>
    
      <Stat>
        <StatLabel>Recovery Rate</StatLabel>
        <StatNumber>{recTanStr}</StatNumber>
        <StatHelpText>
          <StatArrow type={statArrow(recTan - recTanPrev)} />
            {recTanPrevStr}
        </StatHelpText>
      </Stat>
    </StatGroup>
    </>
  );
}

const statArrow = (num:number) => {
  if (num < 0){
    return "decrease"
  } else {
    return "increase"
  }
}

const displayThColor = (index: number, item: any) => {
  return (
    <Tr key={index}>
      <Td minW={24}>{item.date}</Td>
      <Td minW={40}><Link href={"general/" + item.dirName}><a><Text color="blue.500">{item.venue}</Text></a></Link></Td>
      <Td minW={24}>{colorNum(item.total)}</Td>
      <Td minW={24}>{item.count}</Td>
      <Td minW={24}>{item.hit_count}</Td>
      <Td minW={24}>{evalHitRate(item.count, item.hit_count)}</Td>
      <Td minW={24}>{evalRecRate(item.count, item.total)}</Td>
    </Tr>
  );
};

const colorNum = (num: any) => {
  if (num > 0) {
    const num_str = "+" + String(num)
    if (num <= 1000) {
      return <Text color="green.400"> {num_str} </Text>
    } else {
      return <Text color="green.400" fontWeight="semibold"> {num_str} </Text>
    }
  } else if (num == "") {
    return <Text> {"-"} </Text>
  } else {
    return <Text> {num} </Text>
  }
}

const evalHitRate = (count: number, hitCount: number) => {
  return String(Math.round(hitCount / count*1000)/10) + "%"
}

const evalRecRate = (count: number, total: number) => {
  const recRate = Math.round(((count*100 + total) / count*100)*1)/100
  return String(recRate) + "%"
}
