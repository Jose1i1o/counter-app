// name it with use to indicate it is a hook
import { useState, useEffect } from "react";
import getGifs from "../../helpers/getGifs";

const useFetchGifs = ( category ) => {

    const [state, setState] = useState({
      data: [],
      loading: true
    });

    // effects can not be async because they are expecting something synchronous
    useEffect(() => {
      getGifs( category )
        .then( images => {
          // setTimeout(() => {
            setState({
            data: images,
            loading: false
          })
        // }, 500)
      })
    }, [ category ])

  return state;

}


export default useFetchGifs;