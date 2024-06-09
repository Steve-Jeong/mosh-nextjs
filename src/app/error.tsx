'use client'
import Error from 'next/error'
import React from 'react'

type ErrorType = {
  error : Error
}
const ErrorPage = ({error}:ErrorType) => {
  console.log('Error : ', error)
  return (
    <div>An unexpected error has occurred!!</div>
  )
}

export default ErrorPage