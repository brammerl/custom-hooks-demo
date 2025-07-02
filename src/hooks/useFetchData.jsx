import axios from "axios"
import { useState, useEffect } from "react"

const useFetchData = (endpoint = '') => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(undefined)

  // USE YOUR ENV VARIABLES DON'T BE A SECURITY RISK LIKE ME
  const URL = `http://localhost:3000/${endpoint}`
  // Call to the api to get the data
  useEffect(() => {
    const getData = async() => {
      setLoading(true)
      try {
        const { data } = await axios.get(`${URL}`)
         // Put what we want into a state variable
        setData(data)
        setLoading(false)
      } catch (e) {
        setLoading(false)
        setError(e.message)
        console.log(e)
      }
    }

  getData()
  }, [URL])

  return {error, data, loading}
}

export default useFetchData;