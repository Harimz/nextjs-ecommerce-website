import { Container } from "../elements";
import Header from "../components/header";
import Info from "../components/info";
import { server } from "../config";

const Home = ({ consoleList, laptopList }) => {
  console.log(consoleList);
  console.log(laptopList);

  return (
    <Container mt="2rem">
      <Header />
      <Info />
    </Container>
  );
};

export const getStaticProps = async () => {
  const consoleRes = await fetch(`${server}/api/products/category/console`);
  const consoleData = await consoleRes.json();

  const laptopRes = await fetch(`${server}/api/products/category/laptop`);
  const laptopData = await laptopRes.json();

  return {
    props: {
      consoleList: consoleData,
      laptopList: laptopData,
    },
  };
};

export default Home;
