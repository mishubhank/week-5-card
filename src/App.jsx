
import './App.css'
import { Card } from './components/Card'

function App() {
const props={
  name:'Shubhank',
    description:'Cohor Week 5  ',
    interestH:' Interests',
    interest:['chess','notcoding'],
    linkedIn:'https://www.linkedin.com/in/shubhank-mishra/'
    ,twitter:'www.x.com'

}

  return (
    <>
  <Card {...props}></Card>
    </>
  )
}





export default App
