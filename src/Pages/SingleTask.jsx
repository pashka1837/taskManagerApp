import { useLocation } from 'react-router-dom';
import { useRef } from 'react';
import ModalBG from '../Components/ModalBG';
import SingleTaskComp from '../Components/SingleTaskComp';

export async function action({ request }) {
  const formData = await request.formData();
  console.log(formData.get('hey'));
  return null;
}
export default function SingleTask() {
  const myRef = useRef();

  const location = useLocation();
  const { id, columnName } = location.state;

  return (
    <ModalBG myRef={myRef}>
      <SingleTaskComp id={id} columnName={columnName} myRef={myRef} />
    </ModalBG>
  );
}
