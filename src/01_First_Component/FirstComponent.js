// import { Fragment } from 'react'; // Fragment is a component and is an unnecessary import

// we have two kind of components: those based on classes and those based in components
// The last are now called functional components, previously SFC (Stainless Functional Components)
// With hooks Functional Components are much easier to maintain and to read

// This is a FC
// const FirstComponent = ( props ) => { // We can use destructuring here
const FirstComponent = ({ greetings = "There is a bird on my window shelf 🦜🥰" }) => {

  // console.log(props);
  // const greetings = "Have a great day! ❤️"; 

  const person = { 
    name: 'Jose',
    age: 33
  }

  // To use variables we will use {} in the HTML syntax. We can use strings, number, arrays but not booleans. 

  // Return needs the parenthesis if we have a space, breakdown between return and the html or if there is more than one tag. All the code also needs to be contained within one tag/ element to keep the reference easily. For example a <div></div>.

  // However, creating a <div></div> will generate unnecessary elements. This can be solved in different ways. For example, using a <fragment></fragment> which needs to be imported from React, the other way is with a <></>

  // See the html in the console to see the different inserted elements
  return (
    <>
    {/* <h1> { props.greetings } </h1> */}
    <h1> { greetings } </h1>
    {/* <h1> { props.greetings } </h1> This is comming from the props at index.js */}
    {/* <pre> { JSON.stringify(person) } </pre> Text in the tag pre is shown in a fixed font, it´s not proportional, it is exactly shown as it is in the file */}
    <span>My name is { person.name } and I hope you are ok</span>
  </>
  )
}

export default FirstComponent;
