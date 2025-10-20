import HomeLayout from "../../layouts/HomeLayout";
import Banner from "./components/Banner";
import LoginCard from "./components/LoginCard";

export default function HomePage() {
  return (
    <HomeLayout>
      <Banner />
      <LoginCard />
    </HomeLayout>
  );
}
