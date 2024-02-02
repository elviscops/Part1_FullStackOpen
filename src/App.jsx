

const Header = function(props){
    return (<h1>{props.title}</h1>)
}

const Content = function(props){
    return (<p>{props.part} {props.count}</p>)
}

const Plus = (i) => {
    if (i < 2) {
        return (" + ");
    } else {
        return ("");
    }}


const Total = function(props){
    const array = props.arr;

    return ( <div>
        <p>Number of exercises {" "}
        {array.map( (val , i)=> {
            return (val + Plus(i))
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

        <Content part={part1} count={exercises1}/>
        <Content part={part2} count={exercises2}/>
        <Content part={part3} count={exercises3}/>
        <Total arr={[exercises1,exercises2,exercises3]}/>

      </div>
    )
  }
  
  export default App