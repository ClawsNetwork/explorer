import classNames from 'classnames';

import { AccountLink, FormatAmount, NetworkLink, Trim } from 'components';
import { urlBuilder } from 'helpers';
import { UITransactionInPoolType } from 'types';

import { TransactionInPoolMethodBadge } from './TransactionInPoolMethodBadge';
import { TransactionInPoolTypeBadge } from './TransactionInPoolTypeBadge';

export interface TransactionInPoolRowUIType {
  transaction: UITransactionInPoolType;
}

export const TransactionInPoolRow = ({
  transaction
}: TransactionInPoolRowUIType) => {
  const { isNew, txHash, sender, receiver, receiverUsername, type, value } =
    transaction;

  return (
    <tr className={classNames('animated-row', { new: isNew })}>
      <td>
        <div className='d-flex align-items-center hash'>
          <NetworkLink
            to={urlBuilder.transactionInPoolDetails(txHash)}
            data-testid='transactionLink'
            className='trim-wrapper'
          >
            <Trim text={txHash} />
          </NetworkLink>
        </div>
      </td>
      <td className='sender text-truncate'>
        <AccountLink address={sender} data-testid='receiverLink' hasHighlight />
      </td>
      <td className='receiver text-truncate'>
        <AccountLink
          address={receiver}
          username={receiverUsername}
          data-testid='receiverLink'
          hasHighlight
        />
      </td>
      <td className='transaction-type'>
        <TransactionInPoolTypeBadge type={type} hasHighlight />
      </td>
      <td className='transaction-function'>
        <TransactionInPoolMethodBadge transaction={transaction} />
      </td>
      <td className='transaction-value'>
        <FormatAmount value={value} />
      </td>
    </tr>
  );
};
