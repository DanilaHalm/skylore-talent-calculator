const AllSkills = ({skills,setSkills}) => {
  
    
  const checkSkill = (index) => {
const updated = [...skills]
updated[index].checked = !updated[index].checked
setSkills(updated)
}
  const checkActive = () => {
  const filtered = skills.filter(skill=> skill.checked === true)
  return filtered.length > 3 ? true : false
}
  
  return (
    <div className="grid grid-cols-4 gap-4 justify-center">

      {skills.map((skill) => {
      return (skill.index!==0 && 
      <div key={skill.name} className={`w-14 h-14 ${skill.checked? "bg-blue-800" : "bg-blue-200"}`}>
      
        <input type="checkbox" onClick={()=> checkSkill(skill.index)} disabled={skill.checked === false? checkActive() : false} checked={skill.checked} className="opacity-0 w-14 h-14 bg-green-200"/>
      </div>
    )
      })}
    </div>
  )
}

export default AllSkills
