import React from 'react';
import axios from 'axios'
import { connect } from 'react-redux'

class DetailCardLogement extends React.Component {
  constructor() {
    super();
    this.state = {
     
      list:  {},   
      isFavoriteLog: false,
    }
  } 

  componentDidMount() {
    const { match:{params}} = this.props;
    let id = params.id;
    //let id = this.props.match.params.id;
     
    axios.get("https://mamaison.arenaplaza.site/api/Room/GetRoomDetail/"+id)
      .then(res => {
        const listlogement = res.data;
        //console.log(listlogement)
        console.log(this.props)
        this.setState({ list: listlogement });
        const favoritesLogIndex = this.props.favoritesLog.findIndex(item=>item.id===this.state.list.id)
        if (favoritesLogIndex !== -1) {
           this.setState({isFavoriteLog:true})
           
           }
           else{

             this.setState({isFavoriteLog:false})
           }
        }
      )
  }


 handleFavoritelog(log){
   console.log(this.props)
        this.setState({
          isFavoriteLog: !this.state.isFavoriteLog
        });
        const action = { type: "TOGGLE_FAVORITE", value: log };
        this.props.dispatch(action);
      }

  // handleFavoritelog() {
     
  //   const isFavoriteLog = (this.props.favoriteLog)
  //       console.log(isFavoriteLog)
  //    if (this.props.isFavoriteLog) {
        
  //     // Si la props isFavoriteLog vaut true, on affiche le coeur plein
  //      return (
  //        <img src={"ic_favorite.jpg"} alt = '' style={{
  //             position: 'relative',
  //             float:'right',
  //             top:-30,
  //             height:30,
  //             width:30
  //          }}/>
  //     )
  //    }
  // }
  

  render() {
      const {list} = this.state
      return(
        
        <div>  
              <img src={list.roomStateName} alt = ''  />    
         <ul>
                  
          <li>appartement: {list.bedroomNumber}</li>,
          <li>studio: {list.showerNumber}</li>,
          <li>chambres: {list.cookedNumber}</li>,
          <li>salons: {list.rentCost}</li>,
          <li>cuisines: {list.livingRoomNumber}</li>,
          
          <div class="Image_zone" onClick={()=>this.handleFavoritelog(list)}> 
             <img src={this.props.favoritesLog.findIndex(item=>item.id===list.id)!==-1 ? "/Images/ic_favorite.jpg":"/Images/ic_favorite_border.jpg" } alt = '' style={{
              position: 'relative',
              float:'right',
              top:-30,
              height:30,
              width:30
           }}/>     
       </div>
        </ul>
        
       </div>
      );
     
    }
  }

  
  const mapStateToProps = state => {
    return {
        favoritesLog: state.favoritesLog
    };
};
export default connect(mapStateToProps)(DetailCardLogement);  

//export default DetailCardLogement;
 