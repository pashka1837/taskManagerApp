import { useSelector } from 'react-redux';
import { Box, Typography } from '@mui/joy';
import './DrawerComponent.css';
import DrawerList from './DrawerList';
import HideDrawerBtn from './HideDrawerBtn';
import ChangeThemeBtn from './ChangeThemeBtn';

export default function DrawerComponent() {
  const { boards } = useSelector((store) => store.drawer);
  return (
    <Box
      className="drawer"
    >
      <Typography
        sx={{
          color: 'textSecon',
          pl: '1em',
          letterSpacing: '3px',
          fontWeight: '600',
          textTransform: 'uppercase',
          caretColor: 'transparent',
        }}
      >
        ALL BOARDS (
        {boards.length}
        )
      </Typography>
      <DrawerList />
      <ChangeThemeBtn />
      <HideDrawerBtn />
    </Box>

  );
}

// export default function DrawerComponent() {
//   const { isOpen, boards } = useSelector((store) => store.drawer);
//   return (
//     <Drawer disableEnforceFocus open={isOpen}>
//       <Box className="drawer">
//         <h4 className="drawerTitle">
//           ALL BOARDS (
//           {boards.length}
//           )
//         </h4>
//         <DrawerList />
//         <ChangeThemeBtn />
//         <HideDrawerBtn />
//       </Box>
//     </Drawer>
//   );
// }
