import classNames from 'classnames';

import { AccountLink, NetworkLink, TimeAgo, Trim } from 'components';
import { urlBuilder } from 'helpers';
import { UIEventType, WithClassnameType } from 'types';
import { EventIdentifierBadge } from './EventIdentifierBadge';

export interface EventRowUIType extends WithClassnameType {
  event: UIEventType;
}

export const EventRow = ({ event }: EventRowUIType) => {
  const { txHash, identifier, address, timestamp, isNew } = event;

  return (
    <tr className={classNames('animated-row', { new: isNew })}>
      <td>
        <div className='d-flex align-items-center hash'>
          <NetworkLink
            to={urlBuilder.eventDetails(txHash)}
            data-testid='transactionLink'
            className='trim-wrapper'
          >
            <Trim text={txHash} />
          </NetworkLink>
        </div>
      </td>
      <td className='text-neutral-400'>
        <TimeAgo value={timestamp} short tooltip />
      </td>
      <td>
        <AccountLink
          address={address}
          className='d-flex align-items-center trim-wrapper gap-2 hash hash-xxl'
          data-testid='addressLink'
          hasHighlight
        />
      </td>
      <td className='identifier text-truncate'>
        <EventIdentifierBadge identifier={identifier} hasHighlight />
      </td>
    </tr>
  );
};
