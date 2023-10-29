/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { IInvitee } from '../interfaces/invitee';
import './AddInvitee.css';

type Props = {
  invitees: IInvitee[],
  setInvitees: React.Dispatch<React.SetStateAction<IInvitee[]>>
}

const AddInvitee:React.FC<Props> = ({ invitees, setInvitees }) => {
  const [input, setInput] = useState<IInvitee>({
    name: '', age: undefined, avatar: '', rsvp: undefined,
  });

  const onInviteeChange = (event:React.ChangeEvent<HTMLInputElement>) : void => {
    setInput({
      ...input,
      [event.target.name]: event.target.type === 'checkbox' ? event.target.checked : event.target.value,
    });
  };

  const addToParty = (): void => {
    if (!input.name || !input.age || !input.avatar) return;
    setInvitees([
      ...invitees,
      {
        name: input.name,
        age: parseInt(input.age.toString(), 10),
        avatar: input.avatar,
        rsvp: input.rsvp,
      },
    ]);
    setInput({
      name: '', age: '', avatar: '', rsvp: undefined,
    });
  };

  return (
    <div className="addInviteeContainer">
      <label htmlFor="name">Name</label>
      <input type="text" placeholder="your name..." name="name" id="name" className="" value={input?.name} onChange={onInviteeChange} />
      <label htmlFor="age">Age</label>
      <input type="text" placeholder="your age..." name="age" className="" value={input?.age} onChange={onInviteeChange} />
      <label htmlFor="avatar">Avatar</label>
      <input type="text" placeholder="your avatar url..." name="avatar" className="" value={input?.avatar} onChange={onInviteeChange} />
      <label htmlFor="rsvp">
        <input type="checkbox" name="rsvp" className="" checked={input?.rsvp} onChange={onInviteeChange} />
        rsvp
      </label>
      <button type="button" onClick={addToParty}>Add to party</button>
    </div>
  );
};

export default AddInvitee;
