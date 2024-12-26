import { memo, useState } from 'react';

export function MemoExample() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  return (
    <>
      <label>
        Name{': '}
        <input className='outline' value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Address{': '}
        <input className='outline' value={address} onChange={e => setAddress(e.target.value)} />
      </label>
      <Greeting name={name} />
    </>
  );
}

const Greeting = memo(function Greeting({ name }) {
  console.log("Greeting was rendered at", new Date().toLocaleTimeString());
  return <h3>Hello{name && ', '}{name}!</h3>;
});


export default MemoExample

