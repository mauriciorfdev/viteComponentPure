import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Recipe({ drinkers }) {
  return (
    <ol>
      <li>Boil {drinkers} cups of water</li>
      <li>Add {drinkers} spoons of tea & {drinkers * 0.5} spoons of sugar</li>
    </ol>
  )
}


let guest = 0;
function Cup() {
  guest = guest + 1;
  return(
    <p>Tea cup for the guest #{guest}</p>
  )
}

function CupFixed({guestNumber}){
  return <p>Tea cup for guest {guestNumber}</p>
}

function TeaGathering(){
  let cups = [];
  for(let i=0; i<12; i++){
    cups.push(<CupFixed key={i} guestNumber={i+1} />)
  }
  return cups;
}

function App() {

  return (
    <>
      <h2>Keep Components Pure</h2>
      <h2>RECIPE FOR TWO</h2>
      <Recipe drinkers={2} />
      <h2>RECIPE FOR A GATHERING</h2>
      <Recipe drinkers={4} />

      <h2>Breaking the Rule:</h2>
      (Cup Component - Expected: 1, 2, 3, 4)
      <Cup /> 
      <Cup />
      <Cup />
      <Cup />
      <h2>Cup Fixed - using props</h2>
      <CupFixed guestNumber = {1} />
      <CupFixed guestNumber = {2} />
      <CupFixed guestNumber = {3} />
      <br />
      <h2>Mutation:</h2>
      <p>Component change a preexisting variable while rendering: MUTATION</p>
      <p>Pure Functions - Dont mutate variables/objects that were created before the call </p>
      <p>HOWEVER: Its OK change variables/objects that you've just created while rendering</p>
      <h2>TEA GATHERING</h2>
      <TeaGathering />
    </>
  )
}

export default App
