const AllSkills = ({skills,setSkills}) => {
  const checkSkill = (index) => {
skills[index].checked = !skills[index].checked
setSkills([...skills])
}
  
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">
      {skills.map((skill) => {
      return (skill.index!==0 && 
      <div key={skill.name} className={`w-14 h-14 ${skill.checked? "bg-blue-800" : "bg-blue-200"}`}>
      {`${skill.index}`}
        <input type="checkbox" onClick={()=> checkSkill(skill.index)} checked={skill.checked} className="opacity-0 w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>
  )
}

export default AllSkills
