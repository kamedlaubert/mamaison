import React from 'react';
import AdminLogement from './AdminLogement'
//import Pagination from "react-js-pagination";
//import {  Link }from 'react-router-dom';
//import { connect } from 'react-redux'

import axios from 'axios'
  
class ListLogements extends React.Component {
  
  constructor(props) {
        super(props);
        this.state = {      
          list:[{}]  
        }
       
    }
     
//    componentDidMount() {
//        const { match:{params}} = this.props;
//        let id = params.id;
//       axios.delete("https://mamaison.arenaplaza.site/api/Room/"+id)
//        .then(res => {
//         this.setState({list: this.state.list.filter(list => list.id !== id)});
//       })
//     }
    
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
            return (<AdminLogement
                key={log.id} logements={log} ></AdminLogement>)
                      
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

export default ListLogements;
 