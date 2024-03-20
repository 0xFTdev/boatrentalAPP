import Nav from "../components/Nav";
import { useAppState } from "../context";

const Home = () => {
  const { counter } = useAppState();
  console.log(counter);
  return (
    <>
      <Nav />
      <section className="p-6">
        <div className="p-3 ring-2 ring-blue-500">
          <h2>Current Bookings: {counter[1]}</h2>
        </div>
        <div className="p-3 ring-2 ring-blue-500">
          <h2>Available Spaceships: {counter[2]}</h2>
        </div>
        <div className="p-3 ring-2 ring-blue-500">
          <h2>Total Spaceships: {counter[0]}</h2>
        </div>
      </section>
    </>
  );
};

export default Home;
