import { useState } from 'react'

/**********************************************/
/*******        Exercises 1.1-1.5     *********/ 
/**********************************************/
// Componenets

const Header = function(props){
    return (<h1>{props.course.name}</h1>)
}

const Part = (props)=>{
    return (<div>{props.name} {props.exercises}</div>);
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

/***********************************************/
/*******        Exercises 1.6-1.11     *********/ 
/***********************************************/
// Components
const TextH1 = function(props){
    return (<h1>{props.text}</h1>)
}

const StatisticLineAvg = function(props){
    return (<StatisticLine text={props.text} value={props.value.toFixed(3)}/>)
}

const StatisticLinePerc = function(props){
    return (<StatisticLine text={props.text} value={props.value.toFixed(2).concat(" %")}/>)
}

const StatisticLine = function(props) {
    return (<><td>{props.text}:</td><td>{props.value}</td></>)}

const Statistics = (props) => {
    if (props.data.all_ratings === 0) {
        return (<tbody><tr><td>No Feedbacks Given</td></tr></tbody>)
    }
    return ( 
        <tbody>
            <tr><StatisticLine text={props.data.good_name} value={props.data.good_ratings}/></tr>
            <tr><StatisticLine text={props.data.neutral_name} value={props.data.neutral_ratings}/></tr>
            <tr><StatisticLine text={props.data.bad_name} value={props.data.bad_ratings}/></tr>
            <tr><StatisticLine text={props.data.all_name} value={props.data.all_ratings}/></tr>
            <tr><StatisticLineAvg text={props.data.avg_name} value={props.data.average_rating}/></tr>
            <tr><StatisticLinePerc text={props.data.pos_name} value={props.data.positive_percentage}/></tr>
        </tbody>
    )
}

const StatsTable = (props) =>{
    return (<table><Statistics data={props.data}/></table>)
}

const Button = ({onClick,text}) => <button onClick={onClick}>{text}</button>

/***********************************************/
/*******       Exercises 1.12 - 1.14   *********/ 
/***********************************************/
// Constants
const voteArray = Array(8).fill(0);
const tmpVoteArray = [...voteArray]
// Components
const TextP = function(props){
    return (<div>{props.text}</div>)
}

const MostPopularAnecdote = (props) => {
    if (props.votes === -1) {
        return ("Not enough votes")
    } else {
        return (<>
        <TextP text={props.anecdote}/>
        <TextP text={stringifyVotes(props.votes)}/>
    </>
    )
    }
}
    
const stringifyVotes = (votes) =>{
    return String("Has "+ votes +" votes")
}










////////////////////////////////////////////////////////////
/////                   APP
////////////////////////////////////////////////////////////
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
    /*******        Exercises 1.6-1.11     *********/ 
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

/***********************************************/
/*******        Exercises 1.12         *********/ 
/***********************************************/
// Constants
const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
const [selected, setSelected] = useState(0);
const [maxVotes, setMaxVotes] = useState(-1);
const [maxVotesPos, setMaxVotesPos] = useState(-1);


const getAnecdoteIndex = () => {
    const randomIndex = Math.floor(Math.random() * anecdotes.length);
    setSelected(randomIndex);
}

const handleVoteClick = () => {
    tmpVoteArray[selected] += 1;
    getAnecdoteIndex();
    getMostPopularAnecdote(tmpVoteArray);
}


const getMostPopularAnecdote = (listOfVotes) => {
    setMaxVotes(Math.max(...listOfVotes));
    setMaxVotesPos(listOfVotes.indexOf(Math.max(...listOfVotes)))
}


////////////////////////////////////////////////////////////
/////                   APP RETURN
////////////////////////////////////////////////////////////
return (
    <div>
    {/* Components for exercises 1.1 - 1.5 */}
    <hr></hr>
    <h5>Exercises 1.1 - 1.5</h5>
    <Header course={course}/>
    <Content parts={course.parts}/>
    <Total parts={course.parts}/>
    <hr></hr>

    {/* Components for exercises 1.6 - 1.11 */}
    <h5>Exercises 1.6 - 1.14</h5>
    <TextH1 text={giveFeedackTitle}/>
    <Button onClick={handleGoodClick} text={"Good"}/>
    <Button onClick={handleNeutralClick} text={"Neutral"}/>
    <Button onClick={handleBadClick} text={"Bad"}/>
    <TextH1 text={statisticsTitle}/>
    <StatsTable data={stats.data}/>
    <hr></hr>

    {/* Components for exercises 1.12-1.14*/}
    <h5>Exercises 1.12-1.14</h5>
    <TextH1 text={"Anecdote of the day"}/>
    <TextP text={anecdotes[selected]}/>
    <TextP text={stringifyVotes(tmpVoteArray[selected])}/>
    <Button onClick={handleVoteClick} text={"Vote"}/>
    <Button onClick={getAnecdoteIndex} text={"Next Anecdote"}/>
    <TextH1 text={"Anecdote with most votes"}/>
    <MostPopularAnecdote anecdote={anecdotes[maxVotesPos]} votes={maxVotes}/>

    </div>
)
}
  
  export default App