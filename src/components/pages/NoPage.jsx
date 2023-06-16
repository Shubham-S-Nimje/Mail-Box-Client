import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div class="container">
    <h1>404 - Page Not Found</h1>
    <p>The page you are looking for does not exist.</p>
    <p>Return to the <Link href="/Mail-Box-Client/">homepage</Link>.</p>
  </div>
  )
}

export default NoPage
