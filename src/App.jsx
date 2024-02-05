import { useState } from 'react'

const TextH1 = function(props){
    return (<h1>{props.text}</h1>)
}

const TextP = function(props){
    return (<p>{props.text} {props.value}</p>)
}

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

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>
    

const App = () => {

    /**********************************************/
    /*******        Exercises 1.1-1.5     *********/ 
    /**********************************************/
    // Constants
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

    /***********************************************/
    /*******        Exercises 1.6-1.14     *********/ 
    /***********************************************/
    // Constants
    const giveFeedackTitle = "Please, Give Feedback!";
    const statisticsTitle = "Statistics";
    // States
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    // Functions
    const handleGoodClick = () => setGood(good + 1);
    const handleNeutralClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);


    return (
      <div>

        {/* Components for exercises 1.1 - 1.5 */}
        <hr></hr>
        <h5>Exercises 1.1 - 1.5</h5>
        <Header course={course}/>
        <Content parts={course.parts}/>
        <Total parts={course.parts}/>
        <hr></hr>


        {/* Components for exercises 1.6 - 1.14 */}
        <h5>Exercises 1.6 - 1.14</h5>
        <TextH1 text={giveFeedackTitle}/>
        <Button onClick={handleGoodClick} text={"Good"}/>
        <Button onClick={handleNeutralClick} text={"Neutral"}/>
        <Button onClick={handleBadClick} text={"Bad"}/>
        <TextH1 text={statisticsTitle}/>
        <TextP text={"Good: "} value={good}/>
        <TextP text={"Neutral: "} value={neutral}/>
        <TextP text={"Bad: "} value={bad}/>

      </div>
    )
  }
  
  export default App