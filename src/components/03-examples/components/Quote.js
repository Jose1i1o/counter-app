import React from 'react'

export const Quote = ({quote, author}) => {
  return (
    <blockquote className='blockquote text-right'>
    <p>{ quote }</p>
    <footer className='blockquote-footer m-2'>{ author }</footer>
  </blockquote>
  )
}