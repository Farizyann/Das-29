import { ICategory } from '@/type/type'
import axios from 'axios'
import Link from 'next/link';
import React from 'react'

export default function Categories({categories} : {categories : ICategory[]}) {
  console.log(categories);
  
  return (
    <div>
      {categories.map((elm) => {
        return(
          <div>
            <p>{elm.name} - <Link href={"/categories/"+elm.slug}>See more</Link>
            </p>
            <hr/>
          </div>
        )
      })}
    </div>
  )
}
export const getStaticProps= async() =>{
  const {data} = await axios.get('https://dummyjson.com/products/categories')
  return{
    props: {
      categories: data
    }
  }
}