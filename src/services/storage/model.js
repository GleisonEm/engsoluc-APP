const result = await Storage.get('produtcts');

let products = null;

if (result.ok) {
    products = result.data;
    products.push(productQueTaVendoAgora);
    await Storage.set('products', products);
}

else {
  await Storage.set('products', [productQueTaVendoAgora]);
}

products = products.filter(p => p.id != idQueVaiSerRemovido);
