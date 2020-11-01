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
                        <img src={"/images/mgm.jpg"} />
                    </div>
                </div>
            )
        }
        return (
            <div>
                <div className="col-md-9">
                    <h2>TOP MEILLEURS ACTEURS </h2>
                    <div className="card">
                        <div className="card-header">
                            <h3>{myActiveUser.name}</h3>
                            <img src={myActiveUser.img} />
                        </div>
                        <div className="card-body">
                            <h3>Filmographie</h3>
                            <p>{myActiveUser.films}</p>
                            <img src={myActiveUser.imgThumbnail} />
                            <ul>
                                <li>Numéro : {myActiveUser.id}</li><br />
                            </ul>
                        </div>
                    </div>
                    <h2>2020-2021</h2>
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

