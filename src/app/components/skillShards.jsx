import Shards from "./shards";

const SkillShards = ({skillIndex}) => {
  return (
    <div className="grow">
      <div className="flex flex-row justify-around shardsBackground rounded-md h-full">
        <Shards skillIndex={skillIndex} shardIndex={1}/>
        <Shards skillIndex={skillIndex} shardIndex={2}/>
        <Shards skillIndex={skillIndex} shardIndex={3}/>
      </div>
</div>
)
}

export default SkillShards