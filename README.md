Nameste react 

#error 1
broswer script can't imports or exports
add type="module" 

#parcel 
- dev bulid
-local server
-automatiaclly refreshing page also (HMR)= hote module replacement
-file watching algorithm - wrriten in c++
- cahing - faster builds


/*
Header
-logo
-navitems
body 
-Search
-RestaurantContainer
  -RestaurantCard
    -img , name of rest. , cuisines,start rating , delivery time
footer
-Copyright
-links
-Address
-Contact
*/

// JSX => Babel transpile to React.createElement => ReactElement(object) - JS object =HTML (brwoser undrrstands)


const {resData}=props;

// yaha pr ek he item desctruct kiya i.e resData to resData me jo b hoga tu use kr sakti hai
    
//const {resname,cuisine,rating,delivertime}=props;
//props se jo tune destruct kiya hai wo count hota hai, yaha pr 4 item hai to 4 he props pass krenge body se

Two type of export and imports

1.default export/import

 export default componentname/variable;
 import componentname from "file path"

 2. Named export / import

 export const component/var ="imagepath"

 import {component } name from "file path"

React Hooks
normal js utility function 

two imp hooks
useState() - superpowerful state variables in react
useEffect()
