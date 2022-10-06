import { Modal, IconButton, Stack } from '@mui/material'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp'
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown'
import CloseIcon from '@mui/icons-material/Close'
import { FormStack } from './componentsTransactionModal/FormStack'
import { ModalTitle } from './componentsTransactionModal/ModalTitle'
import { TextFieldCustom } from './componentsTransactionModal/TextFieldCustom'
import { TypeButton } from './componentsTransactionModal/TypeButton'
import { SubmitButton } from './componentsTransactionModal/SubmitButton'
import { ReactEventHandler } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { validation } from '../../../../../validations/Home'
import { FormSubmit } from '../../../../../global/interfaces/FormSubmit'
import { postData } from '../../../../../service/posts/postData'

type TransactionModalTypes = {
  open: boolean
  onClose: ReactEventHandler
}

export function TransactionModal({ open, onClose }: TransactionModalTypes) {
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
    postData(data)
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
              color: '#A8A8B3'
            }}
          />
        </IconButton>
        <FormStack onSubmit={(data) => handleSubmit(onSubmit)(data)}>
          <ModalTitle text="Cadastrar transação" />

          <TextFieldCustom name="title" label="Nome" control={control} />
          <TextFieldCustom name="amount" label="Preço" control={control} />

          <Stack direction="row" justifyContent="space-between">
            <TypeButton
              name="type"
              control={control}
              onClick={() => setValue('type', 'deposit')}
              backgroundOp={
                watch('type') === 'deposit'
                  ? 'rgba(18, 164, 84, 0.1)'
                  : 'inherit'
              }
            >
              <ArrowCircleUpIcon sx={{ color: '#12A454', marginRight: '6%' }} />
              Entrada
            </TypeButton>

            <TypeButton
              name="type"
              control={control}
              onClick={() => setValue('type', 'withdraw')}
              backgroundOp={
                watch('type') === 'withdraw'
                  ? 'rgba(229, 46, 77, 0.1)'
                  : 'inherit'
              }
            >
              <ArrowCircleDownIcon
                sx={{ color: '#E52E4D', marginRight: '6%' }}
              />
              Saída
            </TypeButton>
          </Stack>

          <TextFieldCustom
            name="category"
            label="Categoria"
            control={control}
          />

          <SubmitButton>Cadastrar</SubmitButton>
        </FormStack>
      </>
    </Modal>
  )
}
