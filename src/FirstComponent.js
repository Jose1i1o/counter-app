// import { Fragment } from 'react'; // Fragment is a component and is an unnecessary import

// we have two kind of components: those based on classes and those based in components
// The last are now called functional components, previously SFC (Stainless Functional Components)
// With hooks Functional Components are much easier to maintain and to read

// This is a FC
const FirstComponent = () => { 

  // Return needs the parenthesis if we have a space, breakdown between return and the html or if there is more than one tag. All the code also needs to be contained within one tag/ element to keep the reference easily. For example a <div></div>.

  // However, creating a <div></div> will generate unnecessary elements. This can be solved in different ways. For example, using a <fragment></fragment> which needs to be imported from React, the other way is with a <></>

  // See the html in the console to see the different inserted elements
  return (
  <>
    <h1>Have a great day! ❤️</h1> 
    <span>My name is Jose and I hope you are ok</span>
  </>
  )
}

export default FirstComponent;
