import { IUser } from '@/type/type'
import axios from 'axios'
import React from 'react'
import { Card } from 'react-bootstrap'

export default function User({ user }: { user: IUser }) {
  return (
    <div>
      <Card style={{ width: '15rem', display: "inline-block" }} key={user.id}>
        <Card.Img variant="top" src={user.image} width={100} />
        <Card.Body>
          <Card.Title>{user.firstName} {user.lastName}</Card.Title>
          <Card.Text>
            {user.email}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  )
}

export const getServerSideProps = async ({ params }: any) => {
  console.log(params);
  
  const { data } = await axios.get('https://dummyjson.com/users/' + params.id)
  return {
    props: {
      user: data
    }
  }
}