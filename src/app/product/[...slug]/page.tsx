import React from 'react'

type PropsType = {
  params : {
    slug : string[]
  },
  searchParams : {
    sortOrder : string
  }
}
const Product = ({params:{slug}, searchParams:{sortOrder}}:PropsType) => {
  return (
    <div>
      <p>Product Slug</p>
      {slug ? slug.map((s, index) => <p key={index}>{s}</p>) : null}
      {/* {slug.map((s,index) => (<p key={index}>{s}</p>))} */}

      <p>searchParams</p>
      {sortOrder ? <p>{sortOrder}</p> : null}
    </div>
  );
}

export default Product

