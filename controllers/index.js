
export const success = data => ({
    code: 0,
    data,
    message: '成功'
})

export const fail = (code, message) => ({
    code,
    message
})