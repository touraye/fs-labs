const Person = ( { person, onClose } ) => {
  
  return (
   <div>
      <h2>{person.name}</h2>
      <p>
        {person.address.street}, {person.address.city}
      </p>
      <p>{person.phone}</p>
      <button onClick={onClose}>close</button>
    </div>
  )
}

export default Person
