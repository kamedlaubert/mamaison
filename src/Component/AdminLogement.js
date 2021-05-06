import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import {  Link }from 'react-router-dom';



class AdminLogement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      list:  [],   
    }
    this.handledelete = this.handledelete.bind(this);
  } 

//   handlePageChange(pageNumber) {
//     console.log(`active page is ${pageNumber}`);
//     this.setState({activePage: pageNumber});
//   }
// handledelete  = (event,id)=>{
//   event.preventDefault()
//   let config= {headers:{"Access-Control-Allow-Origin":"*"}} //gerer l erreur du serveur
//   let locationTemp = this.state.list
//   let locationProv =[{}]


//   locationProv = locationTemp.filter( (item) => item.id !== id)

//  // locationTemp.splice(index, 1)
//    console.log(locationProv)
//    this.setState({list:locationProv});

// }
handledelete(id,list) {
   
	//event.preventDefault();
   axios.delete("https://mamaison.arenaplaza.site/api/Room/"+id)
	.then(res => {
        this.setState({list: this.state.list.filter(item => list.id !== id)});     
      }) 
      
      
    
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
          <p>appartement: {log.bedroomNumber}</p>
          <p>studio: {log.showerNumber}</p>
          <p>chambres: {log.cookedNumber}</p>
          <p>salons: {log.rentCost}</p>
          <p>cuisines: {log.livingRoomNumber}</p>
          <div class="Image_zone" style={{
              position: 'relative',
              float:'right',
              top:-30,
              height:30,
              width:30
           }}> 
           <Link to={"/UpdateLogements/"+log.id}><button style={{marginLeft: "-60px"}}  className="btn btn-info">Update </button></Link>
 
            <button style={{marginLeft: "-150px"}} onClick = { () => this.handledelete (log.id)} className="btn btn-danger">Delete </button>        
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
          