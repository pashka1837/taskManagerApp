// import { Form } from 'react-router-dom';
// import {
//   Button, Sheet, Stack, Typography,
// } from '@mui/joy';
// import {
//   InputDescr, InputsSub, InputsTitle, SelectCompon,
// } from './Inputs/index';

// export default function Modal({ modalData }) {
//   return (
//     <Sheet
//       sx={{
//         padding: '2%',
//         width: '25%',
//         minWidth: '305px',
//         borderRadius: '9px',
//       }}
//     >
//       <Form method="post">
//         <Stack spacing={2}>
//           <Typography level="h4" fontWeight="700">{modalData.title}</Typography>
//           <InputsTitle modalData={modalData} />
//           {modalData.title.includes('Task')
//            && <InputDescr modalData={modalData} /> }
//           <InputsSub modalData={modalData} />
//           {modalData.title.includes('Task')
//            && <SelectCompon modalData={modalData} /> }
//           <Button
//             color="btnPrime"
//             variant="solid"
//             type="submit"
//             sx={{
//               borderTopRightRadius: '25px',
//               borderBottomRightRadius: '25px',
//               borderTopLeftRadius: '25px',
//               borderBottomLeftRadius: '25px',
//               width: '100%',
//             }}
//           >
//             {modalData.btnMainTitle}
//           </Button>
//         </Stack>
//       </Form>
//     </Sheet>

//   );
// }
