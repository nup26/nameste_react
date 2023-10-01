
/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 Tag </h1>
 * </div>
 * </div>
 * 
 * 
 * 
 */

//ReactElement(object) =HTML (brwoser undrrstands)


//nested div in react 

/**

const parent =React.createElement("div" , {id:"parent"} ,

React.createElement("div", {id:"child"}, 

React.createElement("h1",{},"Hello I am H1 tag")

)

);

 */


//nested div in react with siblings


/**
 * <div id="parent">
 * <div id="child">
 * <h1>I am h1 Tag </h1>
 *  <h2>I am h1 Tag </h2>
 * </div>
 * </div>
 * 
 */

/*
const parent =React.createElement("div" , {id:"parent"} ,

React.createElement("div", {id:"child"}, 

[React.createElement("h1",{},"Hello I am H1 tag") , 

React.createElement("h2",{},"I am h2 tag"),]

)

);
*/


//nested div in react with siblings two child

/*
 * <div id="parent">
 * <div id="child1">
 * <h1>I am h1 Tag </h1>
 *  <h2>I am h1 Tag </h2>
 * </div>
 * 
 * <div id="child2">
 * <h1>I am h1 Tag </h1>
 *  <h2>I am h1 Tag </h2>
 * </div>
 * 
 * </div>
 */


const parent =React.createElement("div" , {id:"parent"} ,

[

React.createElement("div", {id:"child1"}, 

[ React.createElement("h1",{},"Hello I am H1 tag child 1") , 

React.createElement("h2",{},"I am h2 tag child 1"), ]

) ,


React.createElement("div", {id:"child2"}, 

[React.createElement("h1",{},"Hello I am H1 tag child 2") , 

React.createElement("h2",{},"I am h2 tag child 2"),]

)

]

);




//const heading= React.createElement("h1",{id:"heading"},"Hello world from react");

const root=ReactDOM.createRoot(document.getElementById("root"));

//console.log(heading); - this will give us an object (it a react element which is just a javascript object)

//root.render(heading);

root.render(parent);
