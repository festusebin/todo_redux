import React, { Component, Fragment } from 'react'
import { connect } from "react-redux"
import { getEditBoxValue, postEditItem } from "../src/store/actions"

class Modal extends Component {
    render() {
        return (
            <Fragment >            
            {!this.props.modalOpen ? null : 
            <div className="container">
                <div className="row">
                    <div id="modal" className="col-8 mx-auto p-5 col-md-6 col-lg-6 text-center text-capitalize">
                        <input type="text" value={this.props.itemForEdit} onChange={(e) => this.editing(e.target.value)}/>
                        <button className="btn btn-primary" onClick={(e) => this.postEdit(this.props.itemForEdit)}>Update</button>
                    </div>
                </div> 
            </div>}
            </Fragment>
        )
    }

    editing = (boxValue) => {
        let id = this.props.itemId
        this.props.getEditBoxValue(boxValue, id)
        console.log("ID",id)
        console.log("Item ID",this.props.itemId)
    }

    postEdit = (item, id) => {
        this.props.postEditItem(item)
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        modalOpen: state.modalOpen,
        itemForEdit: state.itemForEdit,
        itemId: state.itemId
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getEditBoxValue: (editedValue, id) => dispatch(getEditBoxValue(editedValue, id)),
        postEditItem: (newText, id) => dispatch(postEditItem(newText, id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)