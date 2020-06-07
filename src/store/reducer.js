

const todos = []

const initialState = {
    todos: todos,
    inputText: "",
    modalOpen: false,
    itemForEdit: "",
    itemId: null
}

const reducer = (state = initialState, action) => {
    let newState = {...state}

    if (action.type === "DELETE_ITEM") {
        newState.todos = newState.todos.filter(item => item.id !== action.id) 
    }

    if (action.type === "TEXT_CHANGE") {
        let getText = action.inputText
        newState.inputText = getText
    }

    if(action.type === "UPDATE_ITEM"){  
        let newItem = {id: action.id, content: action.inputText}   
        newState.todos = [...newState.todos, newItem]
        newState.inputText = ""
    }

    if(action.type === "EDIT_ITEM"){  
        newState.modalOpen = true  
        newState.itemForEdit = action.content
        newState.itemId = action.id
    }

    if(action.type === "GET_EDIT_VALUE"){
        newState.itemForEdit = action.content
        newState.itemId = action.id
     }

    if(action.type === "POST_EDIT"){
        newState.todos[newState.itemId].content = newState.itemForEdit
        newState.modalOpen = false
    }
    return newState
}

export default reducer