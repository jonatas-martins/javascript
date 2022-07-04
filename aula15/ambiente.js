let num = [5, 8, 2, 9, 3]
// num[3] = 6
// num.push(7)
// num.length para saber quantos elementos tem o vetor
// num.sort() colocar os elementos em ordem crescente

num.push(1)
num.sort()
console.log(num)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log (`O vetor tem ${num.length} posições`)

/* for(let pos = 0 ; pos < num.length ; pos++) 
{
    console.log(`A posição ${pos} tem o valor ${valores[pos]
} */

let pos = num.indexOf(2)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`O valor  está na posição ${pos}`)
}
