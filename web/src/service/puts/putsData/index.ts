import { api } from '../../api'
import { Transaction } from '../../../global/interfaces/Transaction'

export async function putData(data: Transaction) {
  try {
    await api.put<Transaction>(`/finances/${data.id}`, data)
    alert('Transação editada!')
  } catch (error) {
    console.log(error)
  }
}
