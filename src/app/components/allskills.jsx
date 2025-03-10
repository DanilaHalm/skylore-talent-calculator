const AllSkills = ({skills,setSkills}) => {
  
  
  return (
    <div className="flex justify-around">
      {skills.map((skill) => {
      return <div key={skill.name} className="w-14 h-14 bg-blue-200">{skill.index}</div>
      })}
    </div>
  )
}

export default AllSkills
