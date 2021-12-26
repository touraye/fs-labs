import React from 'react'
import Part from './Part'

const Course = ( { course } ) => {
  console.log( course );
  
    return (
        <div>
            <h2>{ course.name }</h2>
           <ul>
                { course.parts.map( part =>                    
                    <Part key={ part.id } part={ part } />
                )}
            </ul>
            <h4>total of {
                course.parts.reduce( ( acc, cur ) => {
                    return acc + cur.exercises;
                }, 0)
            } exercises</h4>            
        </div>
    )
}

export default Course;