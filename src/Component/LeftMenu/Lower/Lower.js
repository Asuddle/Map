import React, { Component } from 'react'
import {connect} from 'react-redux'
import MainCard from './Card'
class Lower extends Component {
    render() {
        return (
            <div>
                {
                  this.props.state.map(d=>{
                return(
                    <MainCard city={d.city} population={d.population}/>
                )
                })  
                }
            </div>
        )
    }
}
const mapStatetoProps=(state)=>{
    return{
        state:state
    }
}

export default connect(mapStatetoProps)(Lower)