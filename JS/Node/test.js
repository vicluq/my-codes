module.exports = function (...num) {

    const arr = num
    const total = arr.reduce((total, valor) => {
        return total += valor
    }, 0)

    return total
}