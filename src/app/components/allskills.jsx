const AllSkills = ({skills,setSkills}) => {
  
  
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {skills.map((skill) => {
      return (skill.index!==0 && 
      <div key={skill.name} className="w-14 h-14 bg-blue-200">
        <input type="checkbox" className="invisible w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>
  )
}

export default AllSkills
