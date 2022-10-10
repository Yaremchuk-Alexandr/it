import { connect } from "react-redux";
import Navbar from "./Navbar";



const mapStateToProps =(state) =>{
    
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