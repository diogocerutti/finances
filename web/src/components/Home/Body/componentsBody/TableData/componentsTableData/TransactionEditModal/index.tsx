import { Modal, IconButton, Stack } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import CloseIcon from '@mui/icons-material/Close'
import { FormStack } from '../../../../../TransactionForm/components/FormStack'
import { FormTitle } from '../../../../../TransactionForm/components/FormTitle'
import { TextFieldCustom } from '../../../../../TransactionForm/components/TextFieldCustom'
import { TypeButtonCustom } from '../../../../../TransactionForm/components/TypeButtonCustom'
import { SubmitButtonCustom } from '../../../../../TransactionForm/components/SubmitButtonCustom'
import { ReactEventHandler } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from '../../../../../../../validations/Home'
import { FormSubmit } from '../../../../../../../global/interfaces/FormSubmit'

type TransactionEditModalTypes = {
  open: boolean
  onClose: ReactEventHandler
}

export function TransactionEditModal({
  open,
  onClose
}: TransactionEditModalTypes) {
  const { handleSubmit, control, setValue, watch } = useForm<FormSubmit>({
    resolver: yupResolver(validation),
    defaultValues: {
      title: '',
      category: '',
      amount: 0,
      type: 'deposit',
      date: new Date().toISOString().substring(0, 10)
    }
  })
  const onSubmit: SubmitHandler<FormSubmit> = (data) => {
    console.log('EDITADO:', data)
  }

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
          <FormTitle text="Editar transação" />

          <TextFieldCustom name="title" label="Nome" control={control} />
          <TextFieldCustom name="amount" label="Preço" control={control} />

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

          <SubmitButtonCustom>Salvar</SubmitButtonCustom>
        </FormStack>
      </>
    </Modal>
  )
}
