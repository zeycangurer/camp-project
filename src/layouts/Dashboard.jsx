import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import CartDetail from '../pages/CartDetail'
import ProductAdd from '../pages/ProductAdd'
import ProductDetail from '../pages/ProductDetail'
import ProductList from '../pages/ProductList'
import Categories from './Categories'

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Categories />
          </Grid.Column>
          <Grid.Column width={12}>
            <Routes>
              <Route exact path='/' element={<ProductList />} />
              <Route exact path='/products' element={<ProductList />} />
              <Route path='/products/:id' element={<ProductDetail />} />
              <Route path='/cart' element={<CartDetail />} />
              <Route path='/product/add' element={<ProductAdd />} />
            </Routes>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}
