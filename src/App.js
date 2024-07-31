import axios from 'axios';
import React from 'react';

class App extends React.Component{

state= { details: [], }

componentDidMount(){

  let data;
  axios.get('http://localhost:8000')
      .then(res => {
        data = res.data;
        this.setState({
          details:data
        });
      })
      .catch(err => { })
}

render(){
  return (
    <div>
    <header>Data Generated From Django</header>
    <hr></hr>
    {this.state.details.map((output, id)=>(
      <div key={id}>
        <form>
          <div>
            <h2>{output.employee}</h2>
            <h3>{output.department}</h3>
            <hr></hr>
          </div>
          </form>
      </div>
    ))}
    </div>
  )
}

}
export default App;
