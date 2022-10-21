import { api } from '../../api'

export async function getData() {
  try {
    const response = await api.get('/finances')
    if (response.status === 200) {
      return response.data
    }
  } catch (error) {
    console.log(error)
    return []
  }
}
