import { getAllPayments} from '@/services/Payment'
import React from 'react'
import { TransactionDataTable } from './transaction-table';


const PaymentModule =async () => {
    const payments = await getAllPayments();

    return (
    <div>
      {
       payments &&
      <TransactionDataTable data={payments?.data} />
      }
    </div>
  )
}

export default PaymentModule

