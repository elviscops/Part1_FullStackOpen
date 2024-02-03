import { useState } from 'react'

const Header = function(props){
    return (<h1>{props.course.name}</h1>)
}

const Part = (props)=>{
    return (<div>{props.name} {props.exercises}</div>);
}

const Content = (props) =>{
    // Iterative version using map
    // const itemsList = props.parts.map((item)=>{
    //     return (<Part key={item.name} name={item.name} exercises={item.exercises}/>)
    // })
    // return (
    //     <div>{itemsList}</div>
    // )

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
        if (i < 2){return(" + ")} else {return("")}
    }

    return ( 
        <div>
            Number of exercises {" "}
            {props.parts.map((val , i)=> {
                return (val.exercises + getSign(i))
            })}
        </div>
    )
}

const DisplayCount = ({counter}) => {return (<div>{counter}</div>)}
const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
    

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

    const [ counter, setCounter ] = useState(0)

    // const handlePlusClick = () => {
    //     console.log('clicked')
    //     return setCounter(counter + 1);
    // }

    const countUp = setTimeout(()=>setCounter(counter+1),1000)

    const handleMinusClick = () => {
        clearTimeout(countUp);
        return setCounter(counter - 1);
    }
    const handleZeroClick = () => {
        clearTimeout(countUp);
        return setCounter(0);
    }
    console.log(counter)
    return (
      <div>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>

        {/* <button onClick={handlePlusClick}>+</button> */}
        <DisplayCount counter={counter}/>
        <Button onClick={handleMinusClick} text={"-"}/>
        <Button onClick={handleZeroClick} text={0}/>


        
        
      </div>
    )
  }
  
  export default App