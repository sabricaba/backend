class Usuario {
    constructor(nombre, apellido){
    this.nombre = nombre
    this.apellido = apellido
    this.libros = []
    this.mascotas = []
    }
    getFullName(){
        return `${this.nombre + " " + this.apellido}`
    }
    addMascota(...mascota){
        this.mascotas.push(...mascota)
    }
    countMascotas(){
        return this.mascotas.length
    }
    addBook(book){
        this.libros.push(book)
    }
    getBookNames(){
        let nombresLibros = this.libros.map ((nomb) => {
            return nomb.nombre
        })
        return nombresLibros
    }
}

const sabrina = new Usuario("sabrina", "cabaña");
const manuel = new Usuario("manuel", "pascual");
console.log(sabrina.getFullName());
sabrina.addMascota("berta", "juancho", "summer");
sabrina.addBook({nombre:"crepusculo", autor:"Stephanie Meyer"});
sabrina.addBook({nombre:"harry potter", autor:"J.K. Rowling"});
console.log(sabrina.countMascotas());
console.log(sabrina.getBookNames());
console.log(sabrina)
