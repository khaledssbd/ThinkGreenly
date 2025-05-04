import { getMemberPayments } from '@/services/Payment'
import React from 'react'
import { TransactionDataTable } from './transaction-table';
import { dummyData } from '../_data/data';

const PaymentModule =async () => {
    const payments = await getMemberPayments();
    const data = payments.data?.length > 0 ? payments?.data : dummyData;
    return (
    <div>
      <TransactionDataTable data={data} />
    </div>
  )
}

export default PaymentModule

