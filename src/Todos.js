import React, {Component} from 'react'
import { connect } from 'react-redux'
import { deleteItem, editItem } from './store/actions'


class Todos extends Component {

    handleDelete = (id) => {      
        this.props.deleteItem(id)
    }

    handleEdit = (content, id) => {
        this.props.editItem(content, id)
    }
    
    render() {
        return (                 
            this.props.todos.map((item) => {
                return(                    
                    <div className="row" key={item.id}>
                    <div className="col-8 mx-auto py-2 border border-warning d-flex justify-content-between">
                        <span className="py-2 b-0">{item.content}</span>
                        <div className="d-flex justify-content-between">
                        <button className="btn btn-primary" onClick={(e) => {
                            e.preventDefault()
                        this.handleEdit(item.content, item.id)}}>Edit</button>
                        <button className="btn btn-danger" onClick={() => this.handleDelete(item.id)}>Delete</button>
                     </div>
                 </div>   
                 </div>
                )
            })                        
        )
    }
}


const mapStateToProps = (state) => {
    console.log(state.modalOpen) 
    return {
        todos: state.todos,
        modalOpen: state.modalOpen
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteItem: (id) => dispatch(deleteItem(id)),
        editItem: (content, id) => dispatch(editItem(content, id))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Todos)