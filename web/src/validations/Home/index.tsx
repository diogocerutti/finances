import * as yup from 'yup'

export const validation = yup.object().shape({
  title: yup.string().trim().required('Nome obrigatório.'),
  price: yup
    .string()
    .trim()
    .required('Preço obrigatório.')
    .matches(/^[0-9]+$/, 'Campo inválido.'),
  category: yup
    .string()
    .trim()
    .required('Categoria obrigatória.')
    .min(3, 'Limite mínimo de 3 caracteres.')
    .max(15, 'Limite máximo de 15 caracteres.')
})
