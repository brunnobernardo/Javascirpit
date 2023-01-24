// Fatorial de maneira recursiva 
// 5! = 5 x 4 x 3 x 2 x 1 = 120

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1) // n! = n x (n-1)! ou 5! = 5 x 4!
    }
}
console.log(fatorial(5))