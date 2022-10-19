import { api } from '../../api'
import { Transaction } from '../../../global/interfaces/Transaction'

export async function deleteData(data: Transaction) {
  try {
    await api.delete(`/finances/${data.id}`)
    alert('Transação excluída!')
  } catch (error) {
    console.log(error)
  }
}
