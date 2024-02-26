'use client'
import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(url, {
          headers: {
            //'Access-Control-Allow-Private-Network': 'true',
          },
        })
        const datas = await response.json()
        setData(datas)
      } catch (error) {
        setError(error)
      }
      setLoading(false)
    }
    fetchData()
  }, [url])
  return { data, loading, error }
}
