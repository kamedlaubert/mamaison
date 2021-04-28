import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {  Link, Redirect }from 'react-router-dom';



class AdminLogement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      list:  {},
      redirect:null,  
      
    }
    
    this.deleteLogement = this.deleteLogement.bind(this);
  } 

//   editLogement(id){
//     //const  log = this.props.logements;
//     //this.setState({redirect: "AddLogement/${id}"});
//     //this.props.history.push("AddLogement/${id}");
//     //<Link to={"/AddLogement/" + log.id}/>
//     //return <Redirect to ={'AddLogement/'+id}/> 
//     this.props.history.push(`/AddLogement/${id}`);
// }

deleteLogement(id) {
	//event.preventDefault();
   axios.delete("https://mamaison.arenaplaza.site/api/Room/"+id)
	.then(res => {
        this.setState({list: this.state.list.filter(list => list.id !== id)});
        const list = res.data;
      console.log(list)          
      })
      
      
}


//   handlePageChange(pageNumber) {
//     console.log(`active page is ${pageNumber}`);
//     this.setState({activePage: pageNumber});
//   }
 
 handleFavoritelog(log){
   console.log(this.props)
        this.setState({
          isFavoriteLog: !this.state.isFavoriteLog
        });
        const action = { type: "TOGGLE_FAVORITE", value: log };
        this.props.dispatch(action);
      }

  render() {
       const  log = this.props.logements
       return(
          <div key={log.id} style={{
            padding: 5,
            border:'1px solid',
            marginBottom:10,
            width:500
          }} >  
            <Link to={"/DetailCardLogement/" + log.id}>
             <img src={log.roomStateName} alt = ''/>
           </Link>
        
        <div>
          <li>appartement: {log.bedroomNumber}</li>,
          <li>studio: {log.showerNumber}</li>,
          <li>chambres: {log.cookedNumber}</li>,
          <li>salons: {log.rentCost}</li>,
          <li>cuisines: {log.livingRoomNumber}</li>,
          <div class="Image_zone" style={{
              position: 'relative',
              float:'right',
              top:-30,
              height:30,
              width:30
           }}> 
           <Link to={"/UpdateLogements/"+log.id}><button style={{marginLeft: "-60px"}}  className="btn btn-info">Update </button></Link>
 
            <button style={{marginLeft: "-150px"}} onClick={ () => this.deleteLogement(log.id)} className="btn btn-danger">Delete </button>        
            </div>
            
        </div>

      </div>
        )
        
  }
}

 const mapStateToProps = state => {
    return {
        favoritesLog: state.favoritesLog
    };
};
export default connect(mapStateToProps)(AdminLogement);                  
          