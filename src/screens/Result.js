import React from 'react'

class Result extends React.Component {
    
    returnBack = () => {
        this.props.setStep(0)
    }

    printPage = () => {
        window.print()
    }

    render() {
    return (
      <div>
        <div className="container">
            <p>Ваши дела неплохи, однако ощущается присутствие некоторых кармических пятен. 
                Необходима регулярная протирка очистителем кармы.
            </p>
        </div>
        <div className="container noprint">
            <button onClick={this.returnBack}>Назад</button>
            <button onClick={this.printPage}>Печать</button>
        </div>
      </div>
    )
  }
}
  
  export default Result
