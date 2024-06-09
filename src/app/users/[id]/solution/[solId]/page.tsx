import React from 'react'

type Props = {
  params : {
    id: number,
    solId: number
  }
}

const DetailSolution = ({params:{id, solId}}:Props) => {
  return (
    <div>
      <p>DetailSolution</p>
      <p>User : {id}</p>
      <p>Solution : {solId}</p>
    </div>
  );
}

export default DetailSolution