import React from 'react'
import ReactDOM from 'react-dom/client'
import List from './List'

type TitleProps = {
    name?: string
    text: string
    year: number
}
const Title = ({ name = 'Jack', text, year }: TitleProps) => {
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
