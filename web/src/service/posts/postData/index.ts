import { api } from '../../api'
import { Transaction } from '../../../global/interfaces/Transaction'

export async function postData(data: Transaction) {
  try {
    const res = await api.post<Transaction>('/finances', data)
    if (res.status === 201) {
      alert('Transação cadastrada!')
    }
  } catch (error) {
    console.log(error)
  }
}
