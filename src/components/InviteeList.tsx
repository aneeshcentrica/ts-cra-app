import React from 'react';
import { IInvitee } from '../interfaces/invitee';
import './InviteeList.css';
import RedLight from '../red_light.svg';
import GreenLight from '../green_light.svg';

type Props = {
  invitees: IInvitee[];
}

const InviteeList:React.FC<Props> = ({ invitees }) => {
  const renderInvitees = ():JSX.Element[] => invitees.map((invitee) => (
    <li className="container">
      <img src={invitee?.avatar} alt={invitee.name} className="avatar" />
      <div>{invitee.name}</div>
      <div>
        {invitee.age?.toString()}
        {' '}
        years
      </div>
      <div>{invitee?.rsvp ? <img style={{ height: '45px', width: '45px' }} src={GreenLight} alt="not attending" /> : <img style={{ height: '45px', width: '45px' }} src={RedLight} alt="not attending" />}</div>
    </li>
  ));
  return (
    <ul>
      {renderInvitees()}
    </ul>
  );
};

export default InviteeList;
