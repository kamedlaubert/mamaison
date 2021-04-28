import React from 'react';
import Logements from "./Component/Logements"
import Pagination from "react-js-pagination";
//import {  Link }from 'react-router-dom';
import { connect } from 'react-redux'

import axios from 'axios'
  
class App extends React.Component {
  
  constructor(props) {
        super(props);
        this.state = {
          
          list:[{}]
        
        }
    }

   
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

      //console.log(this.props)

      return(
        <div>
           
         <ul>
          {this.state.list.map((log,key) => {
            return (<Logements
                key={log.id} logements={log} isFavoriteLog={this.props.favoritesLog.findIndex(item=>item.id===log.id)!==-1}></Logements>)
                      
          })}
        </ul>
        {/* <Pagination
          activePage={this.state.activePage}
          itemsCountPerPage={3}
          totalItemsCount={8}
          pageRangeDisplayed={3}
          onChange={this.handlePageChange.bind(this)}
        />  */}
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
 