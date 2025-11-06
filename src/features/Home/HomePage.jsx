import CardProduct from "../../components/CardProduct";
import HomeLayout from "../../layouts/HomeLayout";
import Banner from "./components/Banner";
import ListProduct from "./components/ListProduct";
import LoginCard from "./components/LoginCard";

export default function HomePage() {
  return (
    <HomeLayout>
      <Banner />
      <LoginCard />
      <CardProduct/>
      <ListProduct />
    </HomeLayout>
  );
}
