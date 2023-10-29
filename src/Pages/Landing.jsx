import { useState } from 'react';
import DrawerComponent from '../Components/DrawerComponent/DrawerComponent';

export default function Landing() {
  const [open, setOpen] = useState(false);

  function toggleDrawer(inOpen) {
    return (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setOpen(inOpen);
    };
  }
  return (
    <main style={{ transform: open ? 'translateX(clamp(256px, 20%, 100%))' : 'translateX(0)' }}>
      <button onClick={toggleDrawer(!open)} className="btnPrime" type="button">open</button>
      <h2>some</h2>
      <DrawerComponent toggleDrawer={toggleDrawer} open={open} />
    </main>
  );
}
