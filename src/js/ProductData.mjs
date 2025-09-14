function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error(`Error al cargar JSON: ${res.status} ${res.statusText}`);
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    // IMPORTANTE: la ruta relativa a la raíz del servidor
    this.path = `/${this.category}.json`;
  }

  async getData() {
    try {
      const res = await fetch(this.path);
      const data = await convertToJson(res);
      console.log("JSON cargado correctamente:", data);
      return data;
    } catch (err) {
      console.error("Error en fetch:", err);
      return [];
    }
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.id === id);
  }
}
