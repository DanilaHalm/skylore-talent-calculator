import Shards from "./shards";

const SkillShards = () => {
  return (
    <div className=" grow bg-purple-300">
      <div className="flex flex-row justify-around bg-red-400 h-full">
        <Shards selectedShard={0}/>
        <Shards selectedShard={0}/>
        <Shards selectedShard={0}/>
      </div>
</div>
)
}

export default SkillShards