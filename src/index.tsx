import React from 'react'
import ReactDOM from 'react-dom/client'

// // const title = React.createElement('h1', { id: 'title' }, 'Hello react.js')
// // console.log(title)

// const title = <h1 id="title">Hellow world</h1>
// console.log(title)

// const content = (
//     <div>
//         {title}
//         {10 + 10}
//         <ul className="list">
//             <li>List item 1</li>
//             <li>List item 2</li>
//             <li>List item 3</li>
//         </ul>
//         <p>
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero esse
//             quia ut saepe amet earum, laborum itaque, dolores consequuntur
//             aperiam quae tenetur nisi odio? Alias natus dolore exercitationem
//             dolores unde.
//         </p>
//     </div>
// )
function List() {
    return (
        <React.Fragment>
            <ul>
                <li>list</li>
                <li>list</li>
                <li>list</li>
            </ul>
        </React.Fragment>
    )
}
type TitleProps = {
    name: string
    text: string
    year: number
}
const Title = ({ name, text, year }: TitleProps) => {
    console.log()
    return (
        <>
            <h1>Hello {name}</h1>
            <p>{text}</p>
            <div>Year: {year}</div>
        </>
    )
}

const App = () => {
    return (
        <div className="app">
            <Title
                name="App"
                text="Lorem djsksnd djfidjdns jjdndn"
                year={2049}
            />
            <List />
        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
