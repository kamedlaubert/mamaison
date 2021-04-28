import React from 'react';
import axios from 'axios'

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        user: {
            userLogin: "",
            userPassWord: "",
            agentName: "",
            agentEmail: "",
            image:"string1"
            },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    //this.setState({value: event.target.value});  
      let usertemp = this.state.user;
      usertemp[event.target.name]= event.target.value; 
      this.setState({ user: usertemp});
    
  }

  handleSubmit(event) {
    //alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
     console.log(this.state.user)
     //alert('Le user a été soumis : ' + this.state.user.userLogin);
    
      

        //Appel de axios transferer l'image       
        axios.post(`https://mamaison.arenaplaza.site/api/User/CreatedUser`, this.state.user)
         .then(res => {
            console.log(res);
             

          }).catch(erreur =>{
            //On traite ici les erreurs éventuellement survenues
            alert("serveur indisponible")
            console.log(erreur);
        });



  }

  render() {
    return (
      <div class='form-wrapper'> 
        <h3>Veuillez vous Enregistrer :</h3>
        <div class="container"> 
      <form onSubmit={this.handleSubmit}>
        <label>
        userLogin :
          <input type="text" value={this.state.name} name="userLogin" onChange={this.handleChange} />
        </label>
        <label>
        userPassword :        
          <input type="password" value={this.state.name} name="userPassWord"   onChange={this.handleChange} />
        </label>
        <label>
        agentName :
          <input type="text" value={this.state.name} name="agentName" onChange={this.handleChange} />
        </label>
        <label>
        agentEmail :
          <input type="text" value={this.state.name} name="agentEmail" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      </div></div>
    );
  }
}

export default SignUp;