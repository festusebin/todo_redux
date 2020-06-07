import React, {Component} from 'react'
import { connect } from 'react-redux'
import { updateItem, textChange } from './store/actions'

class InputBox extends Component {
       
    render() {  
        return (
            <div className="row">
            <h1 className=" col-12 text-center text-align-center">Add Item</h1>
            <form className="col-8 mx-auto my-5">
                <input className=" py-2 col-10 mx-auto mx-5" type="text" name="" id="" 
                    onChange={(e) => this.props.handleChange(e.target)}
                    value={this.props.inputText}
                    />
                <button className="btn btn-primary col-1.5 py-2" onClick={(e) =>{
                    e.preventDefault()
                    this.props.handleSubmit(this.props.inputText)}}>Add Item</button>
            </form>            
            </div>                         
        )
    }
}

const mapStateToProps = (state) => {
    return {       
        inputText: state.inputText,
        todos: state.todos,
        itemId: state.itemId
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        handleChange: (target) => dispatch(textChange(target.value)),
        handleSubmit: (inputText) => dispatch(updateItem(inputText))
    }    
}

export default connect(mapStateToProps, mapDispatchToProps)(InputBox)