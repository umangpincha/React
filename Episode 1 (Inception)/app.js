

{/* <div id="parent">
    <div id="child">
        <h1 id:"my-h1">Hello H1</h1>
        <h2 id:"my-h2">Hello H2</h2>
    </div>
    <div id="child2">
        <h1 id:"my-h1">Hello H1</h1>
        <h2 id:"my-h2">Hello H2</h2>
    </div>
</div> */}

const parent = React.createElement("div" , {id:"parent"} , 

[
    React.createElement("div" , {id:"child"} , [React.createElement("h1" , {id:"my-h1"} , "Hello H1" ) ,  
React.createElement("h2" , {id:"my-h2"} , "Hello H2" )]) ,
React.createElement("div" , {id:"child2"} , [React.createElement("h1" , {id:"my-h1"} , "Hello H1" ) ,  
React.createElement("h2" , {id:"my-h2"} , "Hello H2" )])
]

)

const heading = React.createElement("h1" , {id:"heading"}, "Hello from react")
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)
console.log(parent);