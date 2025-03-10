const AllSkills = ({skills,setSkills}) => {
  
  
  return (
    <div className="flex justify-around flex-wrap">
      {skills.map((skill) => {
      return skill.index!==0 && <div key={skill.name} className="w-14 h-14 bg-blue-200">{skill.index}</div>
      })}
    </div>
  )
}

export default AllSkills
