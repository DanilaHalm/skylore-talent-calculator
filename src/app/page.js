import Shards from "./components/shards";

const Home = () => {
  return (
    <div className="flex justify-center pt-20">
      <Shards selectedShard={0} />
    </div>
  );
}

export Home
