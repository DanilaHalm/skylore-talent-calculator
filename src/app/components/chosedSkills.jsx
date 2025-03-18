const ChosedSkills = ({skills}) => {
  return (
    <div>
  {skills.map(skill => {
  return (
  <div className="w-screen h-[20vh] bg-yellow-200 border" key={skill.name+"add"}>
  
</div>
)
})}
</div>
)
}

export default ChosedSkills