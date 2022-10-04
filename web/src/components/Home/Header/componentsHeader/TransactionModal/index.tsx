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

type TransactionModalTypes = {
  open: boolean
  onClose: ReactEventHandler
}

type FormTypes = {
  title: string
  price: number
  category: string
  type: string
}

export function TransactionModal({ open, onClose }: TransactionModalTypes) {
  const { handleSubmit, control, setValue, watch } = useForm<FormTypes>({
    resolver: yupResolver(validation)
  })
  const onSubmit: SubmitHandler<FormTypes> = (data) => console.log(data)

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
        <FormStack onSubmit={handleSubmit(onSubmit)}>
          <ModalTitle text="Cadastrar transação" />

          <TextFieldCustom name="title" label="Nome" control={control} />
          <TextFieldCustom name="price" label="Preço" control={control} />

          <Stack direction="row" justifyContent="space-between">
            <TypeButton
              onClick={() => setValue('type', 'deposit')}
              background={watch('type') === 'deposit' ? '#D2D2D2' : 'inherit'}
            >
              <ArrowCircleUpIcon sx={{ color: '#12A454', marginRight: '6%' }} />
              Entrada
            </TypeButton>

            <TypeButton
              onClick={() => setValue('type', 'withdraw')}
              background={watch('type') === 'withdraw' ? '#D2D2D2' : 'inherit'}
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
