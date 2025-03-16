const AllSkills = ({skills,setSkills}) => {
  const checkSkill = (skill) => {
skill.checked = !skill.checked
setSkills(...skills)
}
  
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {skills.map((skill) => {
      return (skill.index!==0 && 
      <div key={skill.name} className={`w-14 h-14 ${skill.checked? "bg-blue-800" : "bg-blue-200"}`}>
        <input onClick={()=> checkSkill(skill)} type="checkbox" className="invisible checked={skill.checked} w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>
  )
}

export default AllSkills
