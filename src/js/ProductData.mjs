function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Error cargando el JSON");
  }
}

export default class ProductData {
  constructor(category) {
    this.category = category;
    this.path = `/products.json`; // <- aquí no usar ./ ni ../
  }

  async getData() {
    try {
      const res = await fetch(this.path);
      if (!res.ok) throw new Error("Error en fetch: " + res.status);
      return await res.json();
    } catch (error) {
      console.error("Error en fetch:", error);
      return []; // retornar arreglo vacío si hay error
    }
  }

  async findProductById(id) {
    const products = await this.getData();
    return products.find((item) => item.id === id);
  }
}