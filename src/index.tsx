import React from 'react'
import ReactDOM from 'react-dom/client'

// const title = React.createElement('h1', { id: 'title' }, 'Hello react.js')
// console.log(title)

const title = <h1 id="title">Hellow world</h1>
console.log(title)

const content = (
    <div>
        {title}
        {10 + 10}
        <ul className="list">
            <li>List item 1</li>
            <li>List item 2</li>
            <li>List item 3</li>
        </ul>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero esse
            quia ut saepe amet earum, laborum itaque, dolores consequuntur
            aperiam quae tenetur nisi odio? Alias natus dolore exercitationem
            dolores unde.
        </p>
    </div>
)
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(<React.StrictMode>{content}</React.StrictMode>)
