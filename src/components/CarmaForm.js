import React from 'react';

class CarmaForm extends React.Component {
    onSubmit = (e) => {
        e.preventDefault();
        this.props.setStep(1);
        setTimeout(()=>{
            this.props.setStep(2);
        }, 5000);
        return false;
    }

    render() {

        return (
            <form id="carmaFrom" onSubmit={this.onSubmit}>
                <input type="text" name="name" placeholder="Имя"></input>
                <input type="text" name="year" placeholder="Год рождения"></input>
                <button>Рассчитать карму!</button>
            </form>    
        );
    }
}

export default CarmaForm;