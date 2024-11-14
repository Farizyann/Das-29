import { IUser } from '@/type/type'
import axios from 'axios'
import Link from 'next/link'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function Users({ users }: { users: IUser[] }) {
  return (
    <div>
      {
        users.map(elm => (
          <Card style={{ width: '15rem', display: "inline-block" }} key={elm.id}>
            <Card.Img variant="top" src={elm.image} width={100} />
            <Card.Body>
              <Card.Title>{elm.firstName} {elm.lastName}</Card.Title>
              <Card.Text>
                {elm.email}
              </Card.Text>
            </Card.Body>
            <Card.Body>
              <Link href={"/users/" + elm.id}>See more</Link>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export const getStaticProps = async () => {
  const { data } = await axios.get('https://dummyjson.com/users')
  return {
    props: {
      users: data.users
    }
  }
}
