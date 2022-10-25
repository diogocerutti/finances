import { Modal, IconButton, Stack } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import CloseIcon from '@mui/icons-material/Close'
import { FormStack } from './components/FormStack'
import { FormTitle } from './components/FormTitle'
import { TextFieldCustom } from './components/TextFieldCustom'
import { TypeButtonCustom } from './components/TypeButtonCustom'
import { SubmitButtonCustom } from './components/SubmitButtonCustom'
import { ReactEventHandler, useEffect } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from 'validations/Home'
import { Transaction } from 'global/interfaces/Transaction'
import { postData } from 'service/posts/postData'
import { putData } from 'service/puts/putsData'

type TransactionModalTypes = {
  open: boolean
  onClose: ReactEventHandler
  type: 'post' | 'put'
  allFields?: Transaction
  handleGetTransactions: () => void
}

export function TransactionModal({
  open,
  onClose,
  type,
  allFields,
  handleGetTransactions
}: TransactionModalTypes) {
  const date = new Date()

  const { handleSubmit, control, setValue, watch } = useForm<Transaction>({
    resolver: yupResolver(validation),
    defaultValues: {
      title: '',
      amount: 0,
      category: '',
      type: 'deposit',
      date:
        date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear()
    }
  })
  const onSubmit: SubmitHandler<Transaction> = (data) => {
    if (type === 'post') {
      postData(data)
    }
    if (type === 'put') {
      putData(data)
      handleGetTransactions()
    }
  }

  useEffect(() => {
    if (allFields) {
      setValue('id', allFields.id)
      setValue('amount', allFields.amount)
      setValue('category', allFields.category)
      setValue('date', allFields.date)
      setValue('title', allFields.title)
      setValue('type', allFields.type)
    }
  }, [allFields])

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <>
        <FormStack onSubmit={(data) => handleSubmit(onSubmit)(data)}>
          <IconButton
            onClick={onClose}
            sx={{ display: 'inline-block', position: 'relative', padding: 0 }}
          >
            <CloseIcon
              sx={{
                color: '#A8A8B3',
                display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' },
                position: 'absolute',
                top: 0,
                right: 0
              }}
            />
          </IconButton>
          <FormTitle
            text={type === 'post' ? 'Cadastrar transação' : 'Editar transação'}
          />

          <TextFieldCustom name="title" label="Nome" control={control} />
          <TextFieldCustom
            placeholder="R$"
            name="amount"
            label="Preço"
            control={control}
          />

          <Stack direction="row" justifyContent="space-between">
            <TypeButtonCustom
              name="type"
              control={control}
              onClick={() => setValue('type', 'deposit')}
              background={
                watch('type') === 'deposit'
                  ? 'rgba(18, 164, 84, 0.1)'
                  : 'inherit'
              }
            >
              <ArrowCircleUpIcon sx={{ color: '#12A454', marginRight: '6%' }} />
              Entrada
            </TypeButtonCustom>

            <TypeButtonCustom
              name="type"
              control={control}
              onClick={() => setValue('type', 'withdraw')}
              background={
                watch('type') === 'withdraw'
                  ? 'rgba(229, 46, 77, 0.1)'
                  : 'inherit'
              }
            >
              <ArrowCircleDownIcon
                sx={{ color: '#E52E4D', marginRight: '6%' }}
              />
              Saída
            </TypeButtonCustom>
          </Stack>

          <TextFieldCustom
            name="category"
            label="Categoria"
            control={control}
          />

          <SubmitButtonCustom>
            {type === 'post' ? 'Cadastrar' : 'Salvar'}
          </SubmitButtonCustom>
        </FormStack>
      </>
    </Modal>
  )
}
