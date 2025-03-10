const AllSkills = ({skills,setSkills}) => {
  
  
  return (
    <div className="flex justify-around">
      {skills.map((skill) => {
      return <div key={skill.name} className="w-8 h-8 bg-blue-200">{skill.index}</div>
      })}
    </div>
  )
}

export default AllSkills
