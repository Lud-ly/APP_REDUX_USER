import React, { Component } from "react"
import { connect } from 'react-redux';


class UserDetail extends Component {
    render() {
        const { myActiveUser } = this.props
        if (!myActiveUser) {
            return (
                <div>
                    <div className="col-md-9 ready">
                        <h1>Selectionnez pour démarrer</h1>
                        <img src={"/images/linux_011.jpg"}/>
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="col-md-9">
                <img src={myActiveUser.img}/>
                    <h3>STATISTIQUES JOUEURS : <br /><br />  U11 de {myActiveUser.club}<br /><br /> Voici {myActiveUser.name}<br /></h3>
                    <ul>
                       
                        <li>Numéro : {myActiveUser.id}</li><br />
                        <li>Poste : {myActiveUser.role}</li><br />
                        <li>Titulaire : {myActiveUser.active}</li><br />
                        <li>pied : {myActiveUser.pied}</li><br />
                        <li>Nombres de buts : {myActiveUser.but}</li><br />
                        <li>point fort : {myActiveUser.power}</li><br />
                        <li>manager : {myActiveUser.manager}</li><br />
                        <li>hired_on : {myActiveUser.hired_on}</li><br />
                        <li>salary : {myActiveUser.salary}</li><br />
                        <li>commission : {myActiveUser.commission}</li><br />
                        <li>designation : {myActiveUser.designation}</li><br />
                        <li>dept : {myActiveUser.dept}</li><br />
                        <li>Année : {myActiveUser.year}</li><br />
                        <li>Marque : {myActiveUser.make}</li><br />
                        <li>Modèle : {myActiveUser.model}</li><br />
                        <li>Coupe : {myActiveUser.body_styles}</li><br />
                    </ul>
                    <h2 style={{ "marginTop": "50px" }}>SAISON 2020-2021{myActiveUser.college}</h2>
                    <h2>SAISON 2020-2021{myActiveUser.year}</h2>
                </div>
            </div>
        )
    }

}
function mapStateToProps(state) {
    return {
        myActiveUser: state.activeUser
    }
}
export default connect(mapStateToProps)(UserDetail)

