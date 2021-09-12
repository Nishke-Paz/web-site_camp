import React from 'react';
import PropTypes from 'prop-types';

class Ticket extends React.Component {
    constructor(props){
        super(props);
    }

    static propTypes = {
        name: PropTypes.string,
        desc: PropTypes.shape({
            duration: PropTypes.string,
            nutrition: PropTypes.string,
            leisure: PropTypes.string,
            other: PropTypes.string
        }),
        price: PropTypes.string
    }    

    render() {
        return(
            <div className="row text-center">
                <div className="col">
                    <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                        <h4 className="my-0 fw-normal">{this.props.name}</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">{this.props.price}₽</h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            {Object.keys(this.props.desc).map(item => {
                                return (
                                    <li key={this.props.desc[item]}>{this.props.desc[item]} <hr /></li>
                                )
                            })}
                        </ul>
                        <button onClick={() => this.props.changeTicket(this.props.name)} type="button" className="w-100 btn btn-lg btn-outline-secondary">Купить</button>
                    </div>
                    </div>
                </div>
            </div>
            )
        }
}

export default Ticket;