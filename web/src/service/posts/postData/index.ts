import { api } from '../../api'
import { FormSubmit } from '../../../global/interfaces/FormSubmit'
import { Transaction } from '../../../global/interfaces/Transaction'

export async function postData(data: FormSubmit) {
  try {
    await api.post<Transaction>('/finances', data)
    alert('Transação cadastrada!')
    window.location.reload()
  } catch (error) {
    console.log(error)
  }
}
