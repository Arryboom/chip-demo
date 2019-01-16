const defaultState = {
    code: 'asdasda'
}

export default (prevState = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(prevState))
    if (action.type === 'CHANGE_CODE') {
        newState.code = action.value
    }

    return newState
}