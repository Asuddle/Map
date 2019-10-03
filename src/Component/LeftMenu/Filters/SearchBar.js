import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import {connect} from  'react-redux'
import {DataFilter} from '../../../Actions/action'
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
import Input from '@material-ui/core/Input'
const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  input: {
    margin: theme.spacing(1),
  },
}));

class SearchBar extends Component {
  constructor(){
    super()
  this.state={
      val:'',
      gender:'',
      checked: false,
      item:[],
      data:[],
      filteredData:[],
        initialItems: [],
        items: []
  } 
this.filteredData=[]  
}
dispatchingdata=(filter)=>{
  console.log(filter)
  this.props.dispatch(DataFilter(filter))
}
handleChange=(e)=>{ 
  //const lowercasedFilter = e.target.value.toLowerCase();
  let items = this.state.initialItems;
  items = items.filter((item) => {
    return item.toLowerCase().search(e.target.value.toLowerCase()) !== -1;
  });
  this.setState({items: items});
  //this.filteredData = this.props.state.filter(item => {   
  //const name = item.city.toLowerCase();
  //return (name.indexOf(lowercasedFilter) > -1)
  //  });     
this.dispatchingdata(this.state.item)
}
componentWillMount = () => {
  this.setState({
      item: this.props.state,
  })
}

  render() {
    //const classes = useStyles();

    return (
        <Input
        placeholder="Placeholder"
        //className={classes.input}
        inputProps={{
          'aria-label': 'description',
        }}
        onChange={this.handleChange}
      />
      );
  }
}
 

const mapStateToProps=(state)=>{
return{
  state:state
}
}

export default connect(mapStateToProps)(SearchBar)