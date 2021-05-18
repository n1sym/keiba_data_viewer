import {
  Stack,Text
} from "@chakra-ui/react";
import Layout from "../components/Layout";
import forecast_data from "../../data/forecast"
import {ForecastTable} from "../components/ForecastTable"

function Index() {
  return (
    <Layout>
      <Stack p={4}>
        <Text fontWeight="bold">重賞レース予想結果</Text>
        <ForecastTable forecastData={forecast_data}></ForecastTable>
      </Stack>
    </Layout>
  );
}

export default Index;
