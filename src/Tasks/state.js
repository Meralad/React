import React, { useEffect, useState } from "react";

// class User extends React.Component {
//     constructor(props) {
//         super(props)
        
//         this.state = {
//             title: "Текущее время",
//             date: new Date,
//             counter: 0
//         }
    
//     setInterval(() => {
//         this.setState((state, props) => ({
//         date: new Date,
//         counter: this.state.counter + 1
//         }))
//     }, 1000)
// }
    
// render () {
// return (
//     <div>
//     <p>{this.state.counter}</p>
//     <p>{this.state.title}</p>
//     <p>{this.state.date.toLocaleTimeString()}</p>    
//     </div>   
// )
// }
// }
// ----------------------------------increment, decrement-----------------------------------------------------
// export default class Blade extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          count: 0
//       }
//       this.increment = this.increment.bind(this)
//       this.decrement = this.decrement.bind(this)
//     }
  
//     increment(){
//         this.setState(state => ({
//             count: state.count + 1
//         }))
//     }
  
//     decrement(){
//       this.setState(state => ({
//           count: state.count - 1
//       }))
//   }
    
//       render() {
//       return (
//         <div>
//             <h1>{this.state.count}</h1>
//             <button onClick={this.increment}>increment</button>
//             <button onClick={this.decrement}>decrement</button>
//         </div>
//       )
//     }
//   }
//   ---------------------------------------------------------------------------------------
// function User () {
//     const [state, setState] = useState({
//         title: "Текущее время",
//         date: new Date
//     })

//    setInterval(() => setState({
//         title: "Текущее время",
//        date: new Date
//    }));

//    return (
//     <div>
//     <p>{state.title}</p>
//      <p>{state.date.toLocaleTimeString()}</p>   
//     </div>

//    )
// }
// ---------------------------------------------------------------------------------------
// function User () {
//     const [count, setState] = useState(0);

//     return (
//         <button onClick={() => setState(count + 1)}>
//             На меня нажали {count} раз
//         </button>
//     )
// }
// ---------------------------------------------------------------------------------------
// function User (props) {
//     const [showMode, setShowMode] = useState(false);

//     return(
//         <>
//         <button onClick={() => setShowMode(!showMode)}>
//             Покажи/скрой текст!
//         </button>
//         {showMode ? <User /> : null}
//         </>
//     )
// }
// ---------------------------------------------------------------------------------------

// function User() {
//     const [value, setValue] = useState('Рандомный текст');
    
//     return(
//         <div>
//             <input value={value} onChange = {(event) => setValue(event.target.value)}/>
//         </div>
//     )
// }

// --------------------checkbox-------------------------------------------------------------
// function User() {
//     const [checked, setChecked] = useState()
    
//     return(
//         <div>
//             <label>
//                 <input type="checkbox" 
//                 checked={checked}
//                 onChange={() => setChecked(checked)} />
//                 Значение
//             </label>
//         </div>
//     )
// }

// --------------------radio-------------------------------------------------------------

// function User() {
//     const [checked, setChecked] = useState(null)
    
//     return(
//         <div>
//             <label>
//                 <input type="radio" 
//                 checked={checked === "Яблоко"}
//                 onChange={() => setChecked("Яблоко")} />
//                 Яблоко
//             </label>
            
//             <br />
            
//             <label>
//                 <input type="radio" 
//                 checked={checked === "Банан"}
//                 onChange={() => setChecked("Банан")} />
//                Банан
//             </label>

//             <br />

//             <label>
//                 <input type="radio" 
//                 checked={checked === "Апельсин"}
//                 onChange={() => setChecked("Апельсин")} />
//                 Апельсин
//             </label>
//         </div>
//     )
// }

// --------------Рефакторинг radio---------------------

// function User() {
//     const [checked, setChecked] = useState()
    
//     const items = ['Яблоко','Банан','Апельсин'];

//     return(
// <ul>
//         {items.map((item) => (
//         <li key={item}>
//             <label>
//                 <input type="radio" 
//                 checked={checked === item}
//                 onChange={() => setChecked(item)} />
//                 {item}
//             </label> 
//         </li>
//     ))}
// </ul>
//     );
// }
// --------------------select-------------------------------------------------------------
// function User() {
//     const [value, setValue] = useState('Яблоко');

//     return(
//         <select value={value} onChange={(event) => setValue(event.target.value)}>
//             <option value="Яблоко">Яблоко</option>
//             <option value="Банан">Банан</option>
//             <option value="Апельсин">Апельсин</option>
//         </select>
//     )
// }

// --------------------------------------------------------------------------------------

// function User() {
    
//     useEffect(() => {
//         console.log(document.querySelector('#target'))
//     })

//     const [timer, setTimer] = useState(0)
    
//     useEffect(() => {
//         const flagInterval = setInterval(() => {
//             console.log('fired')
//             setTimer(timer + 1)
//         }, 1000)

//         return () => clearInterval(flagInterval);
//     })

//     return(
//         <p id="target">{timer}</p>
//     )
// }

// export default User