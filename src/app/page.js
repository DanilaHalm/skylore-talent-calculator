import Shards from "./components/shards";
import ClassBar from "./components/classbar";

const Home = () => {
  return (
    <div className="flex justify-center pt-20">
      {/* <Shards selectedShard={0} /> */}
      <ClassBar />
    </div>
  );
};

export default Home;
