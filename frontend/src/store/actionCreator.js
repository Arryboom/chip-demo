import axios from 'axios'

export const detectCode = (code) => {
    return (dispatch) => {
        axios.post('/api/detect', {code: code}).then(res => {
            console.log(res)
        })
    }
};

export const changeCode = (newCode) => {
    return {
        type: 'CHANGE_CODE',
        value: newCode
    }
}
