

const Header = function(props){
    return (<h1>{props.course.name}</h1>)
}

const Part = (props)=>{
    return (<div><p>{props.name} {props.exercises}</p></div>);
}

const Content = (props) =>{
    return (
        <div>
            <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
        </div>
    )
}


const Total = function(props){
    function getSign(i){
        if (i < 2) {
            return (" + ");
        } else {
            return ("");
        }
    }
    return ( 
        <div>
            <p>Number of exercises {" "}
                {props.parts.map( (val , i)=> {
                    return (val.exercises + getSign(i))
                })}
            </p>
        </div>
    )
}


const App = () => {
    const course = {
        name : 'Half Stack application development',
        parts : [
            {
                name:'Fundamentals of React',
                exercises:10
            },
            {
                name:'Using props to pass data',
                exercises:7
            },
            {
                name:'State of a component',
                exercises:14
            }
        ]
    }
     
    return (
      <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>

      </div>
    )
  }
  
  export default App