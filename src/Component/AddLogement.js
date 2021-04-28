import React from 'react';
import axios from 'axios'

class AddLogement extends React.Component {
 
    
    
    constructor(props) {
      super(props);
      this.state = {
          list: {
            //id: this.props.match.params.id,
            roomName: "Appartement1",
            bedroomNumber: 0,
            showerNumber: 0,
            roomStateName: "libre",
            cookedNumber: 0,
            rentCost: 0,
            livingRoomNumber: 0,
            roomCategory: {},
            roomDaCreated: "2021-04-15T09:42:31.173Z",
            
          },
          file: null,
          fileArray: [],           
        }      
       this.handleSubmit = this.handleSubmit.bind(this);
       
            
    }
    
    addRoom(room) {
      console.log(room);
    axios.post(`https://mamaison.arenaplaza.site/api/Room/CreatedRoom`,room )
    .then(res => {
      console.log(res);
      //console.log(res.data.url);
        //On traite la reponse obtenue
         
            }).catch(erreur =>{
              //On traite ici les erreurs éventuellement survenues
              console.log(erreur);
          });
    }
      
    handleSubmit(event){
      //console.log(this.state.fileArray)
      //(empeche de recharger de la page après le submit)
       event.preventDefault();
      //  return
    
         const formData = new FormData();
        //on recupère l'image depuis le fichier file 
         formData.append('file', this.state.fileArray[0]);
         formData.append('upload_preset', 'ml_default');

        //  const options = {
        //    method: 'POST',
        //    body: formData,
        //  };

        //Appel de axios transferer l'image       
        axios.post(`https://api.cloudinary.com/v1_1/dz97fvlyq/image/upload`, formData)
         .then(res => {
            console.log(res.data);
            let templist= this.state.list 
            //on transmet la reponse de l'url cloudinary dans un templist puis in crée un champ
            //roomStateName dans lequel on va stocker l'image         
            templist["roomStateName"]=res.data.url
            //on envoi l'image dans addroom
            this.addRoom(templist)

          }).catch(erreur =>{
            //On traite ici les erreurs éventuellement survenues
            alert("serveur indisponible")
            console.log(erreur);
        });
        

        //  axios({
        //      method: 'post',
        //       url: '/user/12345',
        //        data: {
        //            firstName: 'Fred',
        //            lastName: 'Flintstone'
        //     }
        //   });

       
           //   e.preventDefault ();
            
          //alert('Vous avez choisi : ' + this.state.list);
          //event.preventDefault();
          //listimageUpload:listimageUploadTmp
          //console.log(this.state.list)
          
      }


    // componentDidMount() {
    //     axios.get(`https://mamaison.arenaplaza.site/api/Room/GetRoomList`)
    //       .then(res => {
    //         //const listlogement = res.data;
    //         //console.log(listlogement)
    //         //this.setState({ list: listlogement });
    //       })
    //   }

    handleChange=(event) =>{
        //console.log(this.state.list);
        

        //creer un tableau temporaire pour recuperer les images à uploder
        //let listimageUploadTmp = this.state.listimageUpload;
    if(event.target.name === "imageroom") { 
        for (let i = 0; i < event.target.files.length; i++ )  {
           //console.log(i);
            this.state.fileArray.length < 4 ?
           // charge l'url directement dans le fichier temporaire des images
            this.state.fileArray.push(event.target.files[i]):

            //this.state.fileArray.push(URL.createObjectURL(event.target.files[i])):
            alert(" Limite d'images atteint !!!");
         console.log(event.target.files)
        }
        this.setState({   
          //list:listtemp,    
          file:this.state.fileArray,          
        });
        
      }else{
        let listtemp = this.state.list;
        listtemp[event.target.name]= event.target.value; 
        this.setState({ list: listtemp});
      }
    }
 
    render() {   
     return (
      <div class='form-wrapper'> 
        <h3>Veuillez choisir un logement :</h3>
        <div class="container">   
          <form onSubmit={this.handleSubmit}>
              
          {/* <label>
            Nom :
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label> */}         
          <label><div></div>
          Type de Logement:
          <select value={this.state.name} name='roomName' onChange={this.handleChange}>
            <option value="appartement">Appartement</option>
            <option value="studio">Studio</option>
            <option value="bedroomNumber">Chambre</option>           
          </select>
		  
        </label><div></div>

        <label>
          Nombre de Chambre:
          <select value={this.state.name} name = "bedroomNumber" onChange={this.handleChange}>
             <option>1</option>
             <option>3</option>
             <option>4</option>
             <option>5</option>
          </select>
		  
        </label><div></div>

        <label>
          Nombre de douche:
          <select value={this.state.showerNumber} name='showerNumber' onChange={this.handleChange}>
             <option>1</option>
             <option>3</option>
             <option>8</option>
          </select>
		  
        </label><div></div>
		
		   <label>
          Nombre de cuisine:
          <select value={this.state.cookedNumber} name='cookedNumber' onChange={this.handleChange}>
             <option>1</option>
             <option>3</option>
             <option>5</option>
          </select>
		  
        </label><div></div>
		
	   	<label>
          Nombre de salon:
          <select value={this.state.livingRoomNumber} name='livingRoomNumber' onChange={this.handleChange}>
             <option>1</option>
             <option>3</option>
             <option>5</option>
          </select>
		  
      </label><div></div>
		
		  <label>
          Loyer:
          <select value={this.state.rentCost} name= 'rentCost' onChange={this.handleChange}>
             <option>5000</option>
             <option>10000</option>
             <option>12000</option>
          </select>
		  
        </label><div></div>
		  
		  <label>
          Etat
          <select value={this.state.value} name= 'roomStateName' onChange={this.handleChange}>
            <option value="dispo">Disponible</option>
            <option value="averifier">A verifier</option>
            <option value="occupé">Occupe</option>           
          </select>
		  
        </label><div></div>
        <label> 
        Choisissez une image
        <div className="form-group multi-preview">
        
          {(this.state.fileArray).map((infosimage,index) => (
            <div class="conteuner" key={index}> 
            <img src={URL.createObjectURL(infosimage)} alt="..." height="250" width="200"/>
              <button type="button" onClick={
                           () => { 
                            //this.removePeople(e => e.fileArray.splice(index,1) )
                            this.setState( state => state.fileArray.splice(index,1) )
                     }
                 }>x</button> 
            </div>
            
            ))}
         </div>  
         <input type="file" onChange={this.handleChange} multiple name="imageroom" disabled={ this.state.fileArray.length === 4} />
          
        </label>
          
        <div></div>
         <input type="submit" value="Envoyer" />         
       </form>
      </div>
     </div>
     );
    }
  }

  export default AddLogement;