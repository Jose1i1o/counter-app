import PropTypes from 'prop-types';

const FirstComponent = ({ greetings, subtitle="Today is Monday, 23rd of May 2022" }) => {

// using conditional will result in memory loss. To avoid this we will use moduleName
//   if (!greetings || greetings === "") {
//     throw new Error("You need to pass a greetings prop to the component");
// }

  return (
    <>
      <h1> { greetings } </h1>
      <span>{ subtitle }</span>
    </>
  )
}

// This is a validation that will require a prop to be passed or won´t compile or will throw error
FirstComponent.propTypes = {
  // greetings: PropTypes.string // This is optional
  greetings: PropTypes.string.isRequired // This is required
}

// This is a default prop. They are typically left to empty so that you will know there is a prop to be completed
// When there is one, this will over rule any other prop you pass to it
FirstComponent.defaultProps = {
  subtitle: "My birthday is on the 30th of May"
}

export default FirstComponent;
