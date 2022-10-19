import { Modal, IconButton, Stack } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import CloseIcon from '@mui/icons-material/Close'
import { FormStack } from './components/FormStack'
import { FormTitle } from './components/FormTitle'
import { TextFieldCustom } from './components/TextFieldCustom'
import { TypeButtonCustom } from './components/TypeButtonCustom'
import { SubmitButtonCustom } from './components/SubmitButtonCustom'
import { ReactEventHandler, useEffect, useCallback } from 'react'
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
}

export function TransactionModal({
  open,
  onClose,
  type,
  allFields
}: TransactionModalTypes) {
  const { handleSubmit, control, setValue, watch } = useForm<Transaction>({
    resolver: yupResolver(validation),
    defaultValues: {
      title: '',
      amount: 0,
      category: '',
      type: 'deposit',
      date: new Date().toISOString().substring(0, 10)
    }
  })
  const onSubmit: SubmitHandler<Transaction> = (data) => {
    if (type === 'post') {
      postData(data)
    }
    if (type === 'put') {
      putData(data)
    }
  }

  function getFields() {
    if (type === 'put') {
      if (allFields?.amount) {
        setValue('id', allFields.id)
        setValue('amount', allFields.amount)
        setValue('category', allFields.category)
        setValue('date', allFields.date)
        setValue('title', allFields.title)
        setValue('type', allFields.type)
      }
    }
  }

  const callBackFields = useCallback(() => {
    getFields()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    callBackFields()
  }, [callBackFields])

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
        <IconButton
          onClick={onClose}
          sx={{ position: 'absolute', right: '29%', top: '11%' }}
        >
          <CloseIcon
            sx={{
              color: '#A8A8B3',
              display: { lg: 'flex', md: 'flex', sm: 'flex', xs: 'none' }
            }}
          />
        </IconButton>
        <FormStack onSubmit={(data) => handleSubmit(onSubmit)(data)}>
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
