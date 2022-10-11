import React from 'react'
import Dialogs from './Dialogs';
import { addMessage } from '../../redux/dialogs-page-reducer.ts';
import { connect } from 'react-redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';




const mapStateToProps = (state) => {
    
    return {
        dialogsPage:state.dialogsPage,


    }
}

export default compose(
    connect(mapStateToProps, {addMessage}),
    // withAuthRedirect
)(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs)
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)
// export default DialogsContainer;