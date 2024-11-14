import { IProduct } from '@/type/type'
import axios from 'axios'
import Link from 'next/link';
import React from 'react'
import { Card } from 'react-bootstrap';
export default function Category({ products }: { products: IProduct[] }) {
  console.log(products);

  return (
    <div>
      {
        products.map(elm => (
          <Card style={{ width: '15rem', display: "inline-block" }} key={elm.id}>
            <Card.Img variant="top" src={elm.thumbnail} width={100} />
            <Card.Body>
              <Card.Title>{elm.title}</Card.Title>
              <Card.Text>
                {elm.category}
              </Card.Text>
              <Card.Text>
                {elm.price}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Link href={"/product/" + elm.id}>See more</Link>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  console.log(params);

  const { data } = await axios.get('https://dummyjson.com/products/category/' + params.id)
  return {
    props: {
      products: data.products
    }
  }
} 
