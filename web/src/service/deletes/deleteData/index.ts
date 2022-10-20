import { api } from '../../api'
import { Transaction } from '../../../global/interfaces/Transaction'

export async function deleteData(data: Transaction) {
  try {
    const response = await api.delete(`/finances/${data.id}`)
    if (response.status === 200) {
      alert('Transação excluída!')
    } else {
      alert('Erro ao excluir transação.')
    }
  } catch (error) {
    console.log(error)
  }
}
