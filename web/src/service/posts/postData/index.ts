import { api } from '../../api'
import { Transaction } from '../../../global/interfaces/Transaction'

export async function postData(data: Transaction) {
  try {
    const res = await api.post<Transaction>('/finances', data)
    alert('Transação cadastrada!')
    if (res.status === 201) {
      await api.get<Transaction>('/finances')
    }
  } catch (error) {
    console.log(error)
  }
}
