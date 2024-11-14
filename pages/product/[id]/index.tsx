import { IProduct } from '@/type/type'
import axios from 'axios'
import React from 'react'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export default function Product({ product }: { product: IProduct }) {
  console.log(product);

  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.thumbnail} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <hr />
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{product.price}</ListGroup.Item>
          <ListGroup.Item>{product.brand}</ListGroup.Item>
          <ListGroup.Item>{product.dimensions?.height}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          {
            product.images?.map((e, i)=>(
              <img src={e} key={i} width={100}></img>
            ))
          }
        </Card.Body>
      </Card>
    </div>
  )
}


export const getServerSideProps = async ({ params }: any) => {
  const { data } = await axios.get('https://dummyjson.com/products/' + params.id)
  return {
    props: {
      product: data
    }
  }
}
