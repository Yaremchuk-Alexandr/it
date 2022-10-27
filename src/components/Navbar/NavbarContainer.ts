import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-store";
import Navbar from "./Navbar";



const mapStateToProps =(state:AppStateType) =>{
    
    return {
        friends: state.navbar.friends
    }
}

// const mapDispatchToProps = (dispatch) =>{
//     return {}
// }

// 
const NavbarContainer = connect (mapStateToProps,{} )(Navbar)

export default NavbarContainer