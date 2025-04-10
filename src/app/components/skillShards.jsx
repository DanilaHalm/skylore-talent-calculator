import Shards from "./shards";

const SkillShards = (skillIndex) => {
  return (
    <div className=" grow bg-purple-300">
      <div className="flex flex-row justify-around bg-red-400 h-full">
        <Shards skillIndex={skillIndex} shardIndex={1}/>
        <Shards skillIndex={skillIndex} shardIndex={2}/>
        <Shards skillIndex={skillIndex} shardIndex={3}/>
      </div>
</div>
)
}

export default SkillShards