const LevelBar = () => {
  const levels_shards = [
    {lvl:10,shards:11},
    {lvl:12,shards:15},
    {lvl:14,shards:17},
    {lvl:16,shards:20},
    {lvl:18,shards:22},
    {lvl:20,shards:25},
    {lvl:23,shards:27},
    {lvl:26,shards:30},
    {lvl:29,shards:32},
    {lvl:32,shards:35},
    {lvl:35,shards:37}
  ]
  
  return (
    <select>
      {levels_shards.map(level_shard => {
        return <option value={level_shard}>{level_shard.lvl}</option>
      })}
    </select>
  )
}

export default LevelBar
