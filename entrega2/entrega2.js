const fs = require("fs");

class Contenedor {
  constructor(archivo) {
    this.archivo = archivo;
    fs.promises.writeFile(archivo, "");
  }
  async save(objeto) {
    try {
      let datosGuardados = await fs.promises.readFile(this.archivo, "utf-8");
      if (datosGuardados.length === 0) {
        objeto.id = 1;
        await fs.promises.writeFile(this.archivo, JSON.stringify([objeto]));
      } else {
        datosGuardados = JSON.parse(datosGuardados);
        objeto.id = datosGuardados.length + 1;
        datosGuardados.push(objeto);
        await fs.promises.writeFile(
          this.archivo,
          JSON.stringify(datosGuardados)
        );
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getById(id) {
    try {
      let datosGuardados = await fs.promises.readFile(this.archivo, "utf-8");
      datosGuardados = JSON.parse(datosGuardados);
      let objetoDos = datosGuardados.find(
        (producto) => producto.id === id
      );
      if (objetoDos) {
        console.log(objetoDos);
      } else {
        console.log(null);
      }
    } catch (error) {
      console.log(error);
    }
  }
  async getAll() {
    try {
      let datosGuardados = await fs.promises.readFile(this.archivo, "utf-8");
      datosGuardados = JSON.parse(datosGuardados);
      console.log(datosGuardados);
    } catch (error) {
      console.log(error);
    }
  }
  async deletById(id) {
    try {
      let datosGuardados = await fs.promises.readFile(this.archivo, "utf-8");
      datosGuardados = JSON.parse(datosGuardados);
      datosGuardados = datosGuardados.filter((producto) => producto.id != id);
      fs.writeFileSync(this.archivo, JSON.stringify(datosGuardados));
      console.log(datosGuardados);
    } catch (error) {
      console.log(error);
    }
  }

  async deleteAll() {
    try {
      await fs.writeFileSync(this.archivo, "");
    } catch (error) {
      console.log(error);
    }
  }
}

let objeto1 = {
  title: "coca-cola",
  price: 250,
  url: "",
};
let objeto2 = {
  title: "fanta",
  price: 200,
  url: "",
};
let objeto3 = {
  title: "agua",
  price: 150,
  url: "",
};

const productos = new Contenedor("productos.txt");

async function asincrona() {
  try {
    await productos.save(objeto1);
    await productos.save(objeto2);
    await productos.save(objeto3);
  } catch (error) {
    console.log(error);
  }
}

asincrona();
productos.getById(3);
productos.getAll();
// productos.deletById(1);
// productkos.deleteAll();