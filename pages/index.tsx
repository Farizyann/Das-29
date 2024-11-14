import { IProduct } from "@/type/type";
import axios from "axios";
import Link from "next/link";
import { Card } from "react-bootstrap";

export default function Home({ products }: { products: IProduct[] }) {
  console.log(products);

  return (
    <>
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
              <Link href={"/product/"+elm.id}>See more</Link>
            </Card.Body>
          </Card>
        ))
      }

    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://dummyjson.com/products')
  return {
    props: {
      products: data.products
    }
  }
}
