import { Container } from "../elements";
import Header from "../components/header";
import Info from "../components/info";
import { server } from "../config";
import DisplayProducts from "../components/display";
import Head from "next/head";

const HomePage = ({ consoleList, laptopList, monitorList }) => {
  return (
    <Container mt="2rem">
      <Head>
        <title>Home</title>
        <meta
          name="description"
          content="Welcome to Shigeo, browse and shop to your hearts content"
        />
      </Head>
      <Header />
      <Info />
      <DisplayProducts products={consoleList} amount={5} title="Consoles" />
      <DisplayProducts products={laptopList} amount={5} title="Laptops" />
      <DisplayProducts products={monitorList} amount={5} title="Monitors" />
    </Container>
  );
};

export const getStaticProps = async () => {
  const consoleRes = await fetch(
    `$http://shigeo-ecommerce.vercel.app/api/products/category/console`
  );
  const consoleData = await consoleRes.json();

  const laptopRes = await fetch(
    `$http://shigeo-ecommerce.vercel.app/api/products/category/laptop`
  );
  const laptopData = await laptopRes.json();

  const monitorRes = await fetch(
    `$http://shigeo-ecommerce.vercel.app/api/products/category/monitor`
  );
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
