import { Container } from "../elements";
import Header from "../components/header";
import Info from "../components/info";
import { server } from "../config";
import DisplayProducts from "../components/display";

const HomePage = ({ consoleList, laptopList, monitorList }) => {
  return (
    <Container mt="2rem">
      <Header />
      <Info />
      <DisplayProducts products={consoleList} amount={5} title="Consoles" />
      <DisplayProducts products={laptopList} amount={5} title="Laptops" />
      <DisplayProducts products={monitorList} amount={5} title="Monitors" />
    </Container>
  );
};

export const getStaticProps = async () => {
  const consoleRes = await fetch(`${server}/api/products/category/console`);
  const consoleData = await consoleRes.json();

  const laptopRes = await fetch(`${server}/api/products/category/laptop`);
  const laptopData = await laptopRes.json();

  const monitorRes = await fetch(`${server}/api/products/category/monitor`);
  const monitorData = await monitorRes.json();

  return {
    props: {
      consoleList: consoleData,
      laptopList: laptopData,
      monitorList: monitorData,
    },
  };
};

export default HomePage;
