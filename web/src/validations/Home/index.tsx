import * as yup from 'yup'

export const validation = yup.object().shape({
  title: yup
    .string()
    .trim()
    .required('Nome obrigatório.')
    .min(3, 'Limite mínimo de 3 caracteres.')
    .max(30, 'Limite máximo de 15 caracteres.'),
  amount: yup
    .number()
    .required('Preço obrigatório.')
    .typeError('Campo deve ser um número.')
    .min(0, 'Somente valores positivos.'),
  category: yup
    .string()
    .trim()
    .required('Categoria obrigatória.')
    .min(3, 'Limite mínimo de 3 caracteres.')
    .max(15, 'Limite máximo de 15 caracteres.')
})
