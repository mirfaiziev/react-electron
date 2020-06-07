import React from 'react'
import preloader from './../assets/images/tenor.gif'

const Waiting = (props) => {

  return (
    <div>
      <div className="container">
        <p className="center">Обращаемся к звездам, ожидайте ответ</p>
        <p className="center"><img src={preloader} alt=""/></p>
      </div>
    </div>
  )
}

export default Waiting