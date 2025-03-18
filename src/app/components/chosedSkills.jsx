const ChosedSkills = ({skills}) => {
  return (
    <div>
  {skills.map(skill => {
  return (
  <div className="flex flex-col w-screen h-[20vh] bg-yellow-200 border" key={skill.name+"add"}>
    <div className="flex h-1/2 bg-orange-200">
  <div className="h-full bg-blue-200">img</div>
</div>
</div>
)
})}
</div>
)
}

export default ChosedSkills