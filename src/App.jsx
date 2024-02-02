

const Header = function(props){
    return (<h1>{props.title}</h1>)
}

const Part = function(props){
    return (<p>{props.part} {props.count}</p>)
}

const Content = (props) =>{
    return (
        <div>
            <Part part={props.part1} count={props.exercises1}/>
            <Part part={props.part2} count={props.exercises2}/>
            <Part part={props.part3} count={props.exercises3}/>
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
                {props.arr.map( (val , i)=> {
                    return (val + getSign(i))
                })}
            </p>
        </div>
    )
}


const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  
    return (
      <div>
        <Header title={course}/>
        <Content 
            part1={part1} exercises1={exercises1}
            part2={part2} exercises2={exercises2}
            part3={part3} exercises3={exercises3}
        />
        <Total arr={[exercises1,exercises2,exercises3]}/>

      </div>
    )
  }
  
  export default App