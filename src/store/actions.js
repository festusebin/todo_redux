let nextTodo = 0

export const deleteItem = (id) => {
    return {
        type: "DELETE_ITEM",
        id: id
    }
}

export const updateItem = (inputText) => {
    return {        
        type: "UPDATE_ITEM",
        id: nextTodo++,
        inputText: inputText
    }
}

export const textChange = (inputText) => {
    return {
        type: "TEXT_CHANGE",
        inputText: inputText
    }
}

export const postEditItem = (newText, id) => {
    return {
        type: "POST_EDIT",
        id,
        newText
    }
}


export const editItem = (content, id) => {
    return {
        type: "EDIT_ITEM",
        content: content,
        id
    }
}

export const getEditBoxValue = (content, id) => {
    return {
        type: "GET_EDIT_VALUE",
        content: content,
        id
    }
}