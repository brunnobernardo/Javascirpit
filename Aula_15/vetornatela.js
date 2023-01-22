/*
for (let pos = 0; pos < valores.length; pos ++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
console.log('Fim')
 Maneira mais "complexa"*/ 

let valores = [8, 1, 7, 4, 9]
valores.sort()

for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
} // maneira mais simplificada 

