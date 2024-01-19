/* eslint-disable react/no-unknown-property */
/* eslint-disable max-len */
import { useSelector } from 'react-redux';

import {
  DesktopBoard, MobileBoard, NoContent,
} from '../Components/BoardPageComponents/index';

export default function Board() {
  const { isOpen, current } = useSelector((store) => store.drawer);

  if (!current) {
    const data = {
      title: 'No board yet. Create a new board to get started.',
      route: '/add-board',
      btnTitle: 'Add New Board',
    };
    return (<NoContent isOpen={isOpen} {...data} />);
  }
  const columns = current?.columns;

  if (!current.columns?.length) {
    const data = {
      title: 'This board is empty. Create a new column to get started.',
      route: '/add-column',
      btnTitle: 'Add New Column',
    };
    return (<NoContent isOpen={isOpen} {...data} />);
  }

  return (
    <>
      <MobileBoard columns={columns} />
      <DesktopBoard columns={columns} isOpen={isOpen} />
    </>

  );
}
