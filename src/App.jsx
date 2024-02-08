import { useState } from 'react'

const TextH1 = function(props){
    return (<h1>{props.text}</h1>)
}

const StatisticLineAvg = function(props){
    return (<div><StatisticLine text={props.text} value={props.value.toFixed(3)}/></div>)
}

const StatisticLinePerc = function(props){
    return (<div><StatisticLine text={props.text} value={props.value.toFixed(2).concat(" %")}/></div>)
}

const StatisticLine = function(props){
    return (<div>{props.text}: {props.value}</div>)
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

const Statistics = (props) => {
    if (props.data.all_ratings === 0) {
        return (<div><p>No Feedbacks Given</p></div>)
    }
    return ( <div>
        <StatisticLine text={props.data.good_name} value={props.data.good_ratings}/>
        <StatisticLine text={props.data.neutral_name} value={props.data.neutral_ratings}/>
        <StatisticLine text={props.data.bad_name} value={props.data.bad_ratings}/>
        <StatisticLine text={props.data.all_name} value={props.data.all_ratings}/>
        <StatisticLineAvg text={props.data.avg_name} value={props.data.average_rating}/>
        <StatisticLinePerc text={props.data.pos_name} value={props.data.positive_percentage}/>
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

    const stats = {
        data : {
            good_name:'Good',
            good_ratings: 0,

            neutral_name:'Neutral',
            neutral_ratings: 0,

            bad_name:'Bad',
            bad_ratings: 0,

            all_name:'All',
            all_ratings: 0,

            avg_name:'Average',
            average_rating: 0,

            pos_name:'Positive',
            positive_percentage: 0
        }
    }

    // States
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const [all, setAll] = useState(0);
    const [avg, setAvg] = useState(0);
    const [perc, setPerc] = useState(0);

    stats.data.good_ratings = good;
    stats.data.neutral_ratings = neutral;
    stats.data.bad_ratings = bad;
    stats.data.all_ratings = all;
    stats.data.average_rating = avg;
    stats.data.positive_percentage = perc;

    // Functions
    const handleGoodClick = () => {
                const updatedGood = good + 1
                setGood(updatedGood);//prev => prev + 1
                const updatedAll = updatedGood + neutral + bad;
                setAll(updatedAll);
                getAverage(updatedGood, neutral, bad,updatedAll);
                getPositivePerc(updatedGood, neutral, bad,updatedAll);
                
            };
    const handleNeutralClick = () => {
                const updatedNeutral = neutral + 1;
                setNeutral(updatedNeutral);
                const updatedAll = updatedNeutral + good + bad;
                setAll(updatedAll);
                getAverage(good, updatedNeutral, bad, updatedAll);
                getPositivePerc(good, updatedNeutral, bad, updatedAll);
            };
    const handleBadClick = () => {
                const updatedBad= bad + 1;
                setBad(updatedBad);
                const updatedAll = updatedBad + good + neutral;
                setAll(updatedAll);
                getAverage(good,  neutral,updatedBad, updatedAll);
                getPositivePerc(good,  neutral,updatedBad, updatedAll);
            };

    const getAverage = (good, neutral,bad,all) => {
                setAvg((good+bad*(-1))/all);
            }  

    const getPositivePerc = (good,neutral,bad,all) => {
                setPerc((good/all)*100);
            }

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
        <Statistics data={stats.data}/>
        


      </div>
    )
  }
  
  export default App