import React from 'react'


const Header = ( props ) => {
  console.log(props);
    return (
        <div>
            <p>{props.course.name}</p>
        </div>
    )
}


const Content = ( props ) => {
  console.log( props );
  
    return (
        <div>        
        <p>{ props.course.parts[ 0 ].name } { props.course.parts[ 0 ].exercise }</p>
        <p>{ props.course.parts[ 1 ].name } { props.course.parts[ 1 ].exercise }</p>
        <p>{ props.course.parts[ 2 ].name } { props.course.parts[ 2 ].exercise }</p>
        </div>
    )
}

const Total = ( {total} ) => {
    return (
        <div>
            <p>{ total.parts[0].exercise + total.parts[1].exercise + total.parts[2].exercise }</p>
        </div>
    )
}



const App = () => {
  // const-definitions
  const course = {
    name: 'Half Stack application development',  
     parts: [    
      {
            name: 'Fundamentals of React',
            exercise:  10
    },      
     {
            name: 'Using props to pass data',
            exercise:  7
      },        
   {
            name: 'State of a component',
            exercise: 14  
          }
  ]
  }
        

  return (
    <div>
      <Header course={ course}/>
      <Content course={ course }/>
      <Total total={course} />
    </div>
  )
}

export default App;
