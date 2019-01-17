import axios from 'axios'

export const updateAlarms = (alarms) => {
    return {
        type: 'UPDATE_ALARMS',
        value: alarms
    }
}

export const detectCode = (code) => {
    return (dispatch) => {
        axios.post('/api/detect', {code: code}).then(res => {
            console.log(res)
            dispatch(updateAlarms(res.data.alarms))
        })
    }
};

export const changeCode = (newCode) => {
    return {
        type: 'CHANGE_CODE',
        value: newCode
    }
}
