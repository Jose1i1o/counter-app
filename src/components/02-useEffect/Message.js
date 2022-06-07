import { useEffect } from 'react'

const Message = () => {

  useEffect(() => {
    console.log('Component mounted')
    return () => {
      console.log('Component dismantled');
    };
  }, []);

  return (
    <div>Lola (my dog) can do better</div>
  )
}

export default Message;
