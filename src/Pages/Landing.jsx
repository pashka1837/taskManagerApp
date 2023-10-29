import { useSelector } from 'react-redux';

export default function Landing() {
  const isOpen = useSelector((store) => store.drawer.isOpen);

  return (
    <main style={{ left: isOpen ? 'var(--drawer-width)' : '0' }}>
      <h2>some</h2>
      <div className="someDiv"> some infdo</div>
    </main>
  );
}
