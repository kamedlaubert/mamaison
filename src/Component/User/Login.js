import React from 'react';
import axios from 'axios'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        login: {
            userLogin: "",
            userPassWord: "",
            },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    //this.setState({value: event.target.value});
    //this.setState({value: event.target.value});  
      let logintemp = this.state.login;
      logintemp[event.target.name]= event.target.value; 
      this.setState({ login: logintemp});
    
  }

  handleSubmit(event) {
   // alert('Le nom a été soumis : ' + this.state.value);
    event.preventDefault();
    console.log(this.state.login)

     
    //return
     axios.post(`https://mamaison.arenaplaza.site/api/User/Authentificate`, this.state.login)
      .then(res => {
         //console.log(res);
         const userTokeng = res.data.userTokeng;
                localStorage.setItem('token', userTokeng);
                //localStorage.getItem('token');

        //console.log(userTokeng)

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
        userPassWord :        
          <input type="password" value={this.state.name} name="userPassWord"   onChange={this.handleChange} />
        </label>
        <input type="submit" value="Envoyer" />
      </form>
      </div></div>
    );
  }
}

export default Login;