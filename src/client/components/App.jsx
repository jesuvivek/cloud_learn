import React, {PureComponent} from 'react'

export default class App extends PureComponent {
  render(){
    return(
      <div className="container-fluid">
        <nav className="navbar navbar-toggleable-md navbar-light bg-faded header">
          <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a className="navbar-brand" href="#">Configlets</a>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <a className="nav-link" href="#">Customers <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Devices</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="container">
          <h2>Under construction...</h2>
        </div>
      </div>
    )
  }
}
