const defaultState = {
    code: '',
    alarms: []
}

export default (prevState = defaultState, action) => {
    const newState = JSON.parse(JSON.stringify(prevState))
    if (action.type === 'CHANGE_CODE') {
        newState.code = action.value
    }else if (action.type === 'UPDATE_ALARMS') {
        newState.alarms = action.value
    }

    return newState
}