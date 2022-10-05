export interface Transaction {
  id?: string
  title: string
  category: string
  amount: number
  date: string
  type: 'deposit' | 'withdraw'
}
