import { useRouter } from 'next/router'
import React from 'react'

export default function Produto1() {
  const { query } = useRouter()
  return <div>Produto {query?.id}</div>
}
