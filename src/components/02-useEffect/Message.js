import { useEffect, useState } from 'react'

const Message = () => {

  const [ coordinates, setCoordinates ] = useState({ x: 0, y: 0 });
  const { x, y } = coordinates;

  useEffect(() => {
    // console.log('Component mounted')

    const mouseOnMove = (e) => {
      const coordinates = { x: e.x, y: e.y }
      setCoordinates(coordinates);

    // window.addEventListener('mousemove', (e) => {
      // console.log(e);
      // const coordinates = { x: e.x, y: e.y }
      // console.log(coordinates);
      console.log( ':D');
    }

    window.addEventListener('mousemove', mouseOnMove);

    return () => {
      // console.log('Component dismantled');
      window.removeEventListener('mousemove', mouseOnMove);
    };
  }, []);

  return (
    <>
      <h1>Lola (my dog) can do better</h1>
      <p> x: { x } y: { y } </p>
    </>
  )
}

export default Message;
