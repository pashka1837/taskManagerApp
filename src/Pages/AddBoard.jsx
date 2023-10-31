import { Form } from 'react-router-dom';
import InputsSub from '../Components/Inputs/InputsSub';
import InputsTitle from '../Components/Inputs/InputsTitle';

export default function AddBoard() {
  return (
    <div style={{
      position: 'absolute',
      top: '0',
      left: '0',
      right: '0',
      bottom: '0',
      display: 'grid',
      placeItems: 'center',
      backgroundColor: ' rgba(0, 0, 0, 0.25)',
      zIndex: '1600',
    }}
    >
      <Form method="post">
        <InputsTitle label="Title" placeHolder="e.g. Coffe break" />
        <InputsSub label="Columns" btnName="Column" />
      </Form>
    </div>
  );
}
