import React, { Component } from 'react'
import Title from '../../Items/Item/Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductConsumer } from '../../Context'
import CartList from './CartList';
import CartTotals from './CartTotals';
import BottomNavigation from '../../BottomNavigation';
import Toolbar from '@mui/material/Toolbar';
import '../../index.css'
const Cart = (props) => {

    return (
        <section>

            <ProductConsumer>
                {value => {
                    const { cart } = value;
                    if (cart.length > 0) {
                        return (
                            <React.Fragment>
                                <Toolbar style={{
                                    backgroundColor: '#8080ff'
                                }}>


                                </Toolbar>
                                <Title name="your" title="cart" />
                                <CartColumns />
                                <CartList value={value} />
                                <CartTotals value={value} history={props.history} />
                            </React.Fragment>
                        );
                    } else {
                        return <EmptyCart />;
                    }
                }}
            </ProductConsumer>
        </section>
    )
}



export default () => {
    return (<BottomNavigation value={1}>
        <Cart />
    </BottomNavigation>)
}