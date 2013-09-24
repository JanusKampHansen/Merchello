﻿using Merchello.Core.Models;

namespace Merchello.Core.OrderFulfillment.Strategies.Payment
{
    /// <summary>
    /// Defines the apply payment strategy
    /// </summary>
    public interface IApplyPaymentStrategy
    {
       /// <summary>
       /// Performs the actual work of the apply payment transaction
       /// </summary>
       /// <param name="payment">The <see cref="IPayment"/> to be applied in the transaction</param>
       /// <param name="invoice">The <see cref="IInvoice"/> to which the payment is to be applied</param>
       /// <param name="amount">The amount of the <see cref="IPayment"/> to be applied to the <see cref="IInvoice"/>.  This could
       /// be a partial payment
       /// </param>
       /// <param name="transactionType">The <see cref="TransactionType"/> of the resulting transaction created</param>
       /// <param name="transactionDescription">An optional description for the transaction</param>
       /// <param name="raiseEvents">True/False indicating whether or not any service providers required to make the transaction should raise events</param>
        void ProcessTransaction(
            IPayment payment, 
            IInvoice invoice, 
            decimal amount,
            TransactionType transactionType = TransactionType.Credit, 
            string transactionDescription = "",
            bool raiseEvents = true);
    }
}