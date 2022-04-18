import React, { Component } from 'react';

import { storeProducts } from '../data';
import { ProductConsumer } from '../Context';
import Item from './Item/Item'
import Title from './Item/Title';
import { integerPropType } from '@mui/utils';
export default (props) => {

    const [products, setProducts] = React.useState(storeProducts)
    
    let type = parseInt(localStorage.getItem('type'))
    return (
        <React.Fragment>
            <div className="py-5">
                <div className="container">
                    <div className="row" >
                        <ProductConsumer>
                            {value => {
                                return value.products.map(product => {
                                    return product.type == type ? <Item key={product.id} product={product} /> : null
                                });
                            }}
                        </ProductConsumer>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
