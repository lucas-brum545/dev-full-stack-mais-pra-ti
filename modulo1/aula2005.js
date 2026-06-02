// classes
// class Carro{
//     constructor(marca, modelo, ano){
//         this.marca = marca
//         this.modelo = modelo
//         this.ano = ano
//     }

//     mostrarCaracteristicas(){
//         console.log('Carro da marca ' + this.marca + ', modelo ' + this.modelo + ', do ano ' + this.ano)
//     }
// }

// let fiatUno = new Carro('Fiat', 'Uno', '1992')

// fiatUno.mostrarCaracteristicas()

// let chevroletOnix = new Carro('Chevrolet', 'Onix', '2020')
// chevroletOnix.mostrarCaracteristicas()

// lista encadeada

// class Node{
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }

// class LinkedList{
//     constructor() {
//         this.head = null
//         this.length = 0
//     }

//     InsertFirst(value) {
//         let newNode = new Node(value)
//         newNode.next = this.head
//         this.head = newNode
//         this.length++
//     }

//     InsertTail(value) {
//         let newNode = new Node(value)
//         if (!this.head) {
//             this.head = newNode
//         }
//         else {
//             let actual = this.head
//             while (actual.next) {
//                 actual = actual.next
//             }
//             actual.next = newNode
//         }
//         this.length++
//     }
//     PrintList() {
//         let aux = this.head
//         console.log('========== Lista ===========')
//         while (aux) {
//             console.log(aux.value)
//             aux = aux.next
//         }
//     }
// }

// let lista = new LinkedList()
// lista.InsertFirst(10)
// lista.InsertTail(30)
// lista.InsertTail(50)
// lista.InsertFirst(20)
// lista.PrintList()

// lista duplamente encadeada

class Node{
    constructor(value) {
        this.value = value
        this.prev = null
        this.next = null
    }
}

class LinkedList{
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    InsertFirst(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
            this.tail = newNode
        }
        else {
            this.tail.next = newNode
            newNode.next = this.head
            this.head = newNode
            this.length++
        }
    }
    InsertTail(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode
        }
        else {
            let actual = this.head
            while (actual.next) {
                actual = actual.next
            }
            actual.next = newNode
        }
        this.length++
    }
    InsertAt(index, value) {
        if (index < 0 || index > this.length){
            throw new RangeError('Indice fora dos limites!')
        }
        if (index === 0) {
            return this.InsertFirst(value)
        }

        let actual = this.head
        for (let i = 0; i < index; i++){
            actual = actual.next
        }
        let newNode = new Node(value)
        let prev = actual.next

        prev.next = newNode
        newNode.prev = prev
        newNode.next = actual
        actual.prev = newNode

        this.length++
    }

    PrintList() {
        let aux = this.head
        console.log('========== Lista ===========')
        while (aux) {
            console.log(aux.value)
            aux = aux.next
        }
    }
}