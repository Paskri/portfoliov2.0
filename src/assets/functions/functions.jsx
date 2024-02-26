export async function serverFetch(url) {
  let loading = true
  let fetchError = false
  let data = []
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw new Error('Error while fetching datas')
    }
    data = await res.json()
    loading = false
  } catch (error) {
    console.error(error.message)
    loading = false
    fetchError = error
  }
  return { data, fetchError, loading }
}
