/** 
 * @description 大整数相加
 * @param { string } a
 * @param { string } b
 * @returns { string }
*/

export default function add (a, b) {
    let i = a.length - 1
    let j = b.length - 1
    let sum = ''

    let carry = 0
    while (i >= 0 || j >= 0) {
        let rst = (+a[i] || 0) + (+b[j] || 0) + carry
        if (rst >= 10) {
            rst -= 10
            carry = 1
        } 
        else {
            carry = 0
        }

        sum = rst + sum
        i--
        j--
    }
    if (carry) {
        sum = carry + sum
    }

    return sum
}