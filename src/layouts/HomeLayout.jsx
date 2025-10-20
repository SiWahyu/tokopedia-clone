import Footer from "../features/Home/components/Footer";
import Header from "../features/Home/components/Header";

export default function HomeLayout({ children }) {
  return (
    <>
      <main className="py-2 max-w-lg mx-auto pb-12">
        <div className="flex flex-col">
          <Header />
          <div>{children}</div>
          <Footer />
        </div>
      </main>
    </>
  );
}
