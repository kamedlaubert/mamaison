import React from 'react';
import Logements from "./Component/Logements"
import "antd/dist/antd.css";
import {Pagination} from "antd";
//import {  Link }from 'react-router-dom';
import { connect } from 'react-redux'

import axios from 'axios'
  
class App extends React.Component {
   
  constructor(props) {
        super(props);
        this.state = {
          currentPage:1,
          logPerPage:2,
          list:[{}]
        
        }
    }

    handleChange = value => {
      this.setState({
          currentPage: value

      });
  };

  handleSelectChange = e => {
      this.setState({
        logPerPage: e.target.value,
          currentPage: 1,
          
      });
  };

  
  componentDidMount() {
    axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
      .then(res => {
        //const listlogement = res.data;
        const total=res.data.length;
        const listlogement = res.data.slice(total-20,total);
        console.log(listlogement)
        this.setState({ list: listlogement });
      })
  }
      
    render() { 
      const {
        currentPage,
        logPerPage,
    } = this.state; 

    const indexOfLastLog = currentPage * logPerPage;
    const indexOfFirstLog = indexOfLastLog - logPerPage;

      console.log(this.props)

      return(
        <div>
           
         <ul>
          {this.state.list.slice(indexOfFirstLog, indexOfLastLog).map((log,key) => {
            return (<Logements
                key={log.id} logements={log} isFavoriteLog={this.props.favoritesLog.findIndex(item=>item.id===log.id)!==-1}></Logements>)
                      
          })}
        </ul>
         
          <Pagination
            defaultCurrent={this.state.currentPage}
            defaultPageSize={this.state.logPerPage} //default size of page
            pageSize={this.state.logPerPage}
            onChange={this.handleChange}
            total={/*loadingOk && */this.state.list.length > 0 && this.state.list.length} //total number of card data available
          />
          <select value={this.state.logPerPage} onChange={this.handleSelectChange}>
              <option>4</option>
              <option>10</option>
              <option>20</option>
          </select>
        
       </div>
      );
     
    }
  }
  const mapStateToProps = state => {
    return {
      favoritesLog:state.favoritesLog
    };
  };

  
export default connect(mapStateToProps)(App);

//export default App;
 