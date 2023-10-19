import React from "react";
import  ReactDOM  from "react-dom/client";

function Greeting(){
    return (
        <>
        <h1>First App</h1>
        <div>
            <h2>Hello World</h2>
        </div>
        <Person></Person>
        <Message></Message>
        </>
    );
}

const Person = () => <h2>John Doe</h2>
const Message = ()=>{
    return (<p>This is my message</p>);
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Greeting></Greeting>);  
