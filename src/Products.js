import React from 'react';

import './products.css';

async function getProducts() {
  try {
    const res = await fetch('/api/Products')
    console.log(res.status)
    console.log(res.statusText)
    const products = await res.json()
    return products
  } catch (err) {
    throw err.message;
  }
}

class Products extends React.Component {
  constructor () {
    super();
    this.state = {
      products: []
    };
  }

  async componentDidMount() {
    const products = await getProducts();
    this.setState({ products })
  }

  render() {
    return (
    <div>
      {this.state.products.map(p => <div key={p.id} className="item">{p.name}</div>)}
    </div>
    )
  }
}

export default Products