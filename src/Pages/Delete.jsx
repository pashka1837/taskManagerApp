import { useSelector } from 'react-redux';
import DeleteCompon from '../Components/Modals/DeleteCompon';
import { ModalBG } from '../Components/Modals/index';
import Loader from '../Components/Loader/Loader';

export default function Delete() {
  const { isLoading } = useSelector((store) => store.db);

  return (
    <ModalBG>
      {isLoading && <Loader />}
      <DeleteCompon />
    </ModalBG>
  );
}
