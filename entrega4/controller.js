
let dataProducts = [];

const allArray = (req, res) => {
    if(dataProducts.length > 0) {
        res.status(200).json(dataProducts)
    } else {
        res.status(200).send("<h1>INGRESA EL PRODUCTO EN LA SIGUIENTE RUTA --> /index.html</h1>")
    }
};

const addProduct = (req, res) => {
    let objectId = 0;
    const { nombre, price, url } = req.body;
    if(!dataProducts.length) {
        objectId = 1;
    } else {
        let lasIndex = dataProducts.length - 1;
        let newId = dataProducts[lasIndex].id + 1;
        objectId = newId; 
    };

    let newProduct = {
        id: objectId,
        nombre,
        price: Number(price),
        url
    }
    dataProducts.push(newProduct);
    res.status(201).redirect("/");
};

const viewProduct = (req, res) => {
    const id = Number(req.params.id);
    if(dataProducts.length) {
        if(!isNaN(id)) {
            let prodSelected = dataProducts.find( prod => prod.id === id);
            if(prodSelected) {
                res.status(200).json(prodSelected);
            } else {
                res.status(404).json({ error: 'Producto no encontrado!'});
            }
        } else {
            res.status(400).json({ error: 'El ID debe ser un número!'});
        }
    
    } else {
        res.status(404).json({error: 'No se cuenta con ningun producto registrado'});
    }
};

const updateProduct = (req, res) => {
    const id = Number(req.params.id);
    if(dataProducts.length) {
        if(!isNaN(id)) {
            const product = dataProducts.find(data => data.id == id);
            const newArray = dataProducts.filter(data => data.id !== id);
            if(product) {
                const { nombre, price, url } = req.body;
                let productToUpdate = {
                    id,
                    nombre,
                    price: Number(price),
                    url
                };
    
                dataProducts = [...newArray, productToUpdate];
                res.status(200).send('Producto actualizado!');
            } else {
                res.status(404).json({ error: 'Producto no encontrado!'});
            };
        } else {
            res.status(400).json({ error: 'El ID debe ser un número!'});
        };
    } else {
        res.status(404).json({error: 'No se cuenta con productos para actualizar'});
    }
};

const deleteProduct = (req, res) => {
    const id = Number(req.params.id);
    if(dataProducts.length) {
        if(!isNaN(id)) {
            const newAllProducts = dataProducts.filter(data => data.id !== id);
            dataProducts = newAllProducts;
            res.status(200).send('Producto eliminado!');
        } else {
            res.status(400).json({ error: 'ID debe ser un numero!'});
        };
    } else {
        res.status(404).json({error: 'No se cuenta con productos para eliminar'});
    };
};

module.exports = {
    allArray,
    viewProduct,
    addProduct,
    updateProduct,
    deleteProduct
}