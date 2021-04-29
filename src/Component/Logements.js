import React from 'react';
//import axios from 'axios'
import { connect } from 'react-redux'
import {  Link }from 'react-router-dom';


class Logements extends React.Component {
  constructor(props) {
    super(props);
    this.state = {    
      list:  {},  
      //recupere le isfavoriteLog de Apps
      isFavoriteLog: this.props.isFavoriteLog      
    }
    //this.AddLogement = this.AddLogement.bind(this);
    //this.editLogement = this.editLogement.bind(this);
    //this.deleteLogement = this.deleteLogement.bind(this);
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
           
           <div class="Image_zone" onClick={()=>this.handleFavoritelog(log)}> 
            <img src={this.props.favoritesLog.findIndex(item=>item.id===log.id)!==-1 ? "ic_favorite.jpg":"ic_favorite_border.jpg" } alt = '' style={{
              position: 'relative',
              float:'right',
              top:-30,
              height:30,
              width:30
           }}/>
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
export default connect(mapStateToProps)(Logements);                  
          