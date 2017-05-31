module.exports = function countdown(tickCallback){
    let count = 10

    let timer = setInterval(_ => {
        console.log(`count: ${count}`)
        tickCallback(count)
        count--
        if(count < 0){
            clearInterval(timer)
        }
    }, 1000)
}