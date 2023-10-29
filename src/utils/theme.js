import { extendTheme } from '@mui/joy/styles';

// declare module '@mui/joy/styles' {
//   interface PalettePrimaryOverrides {
//     300: false;
//     400: false;
//     500: false;
//     600: false;
//     700: false;
//     800: false;
//     900: false;
//   }
//   interface PaletteNeutralOverrides {
//     800: false;
//     900: false;
//   }
//   interface PaletteDangerOverrides {
//     200: false;
//     300: false;
//     400: false;
//     500: false;
//     600: false;
//     700: false;
//     800: false;
//     900: false;
//   }
// }

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: undefined,
          100: undefined,
          200: undefined,
          300: '#d0cfee',
          400: '#A8A4FF',
          500: '#635FC7',
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          solidHoverBg: 'var(--joy-palette-primary-400)',
          solidActiveBg: 'var(--joy-palette-primary-500)',
          solidHoverBorder: 'var(--joy-palette-primary-400)',
          solidDisabledBg: 'var(--joy-palette-primary-300)',
          solidDisabledColor: 'var(--joy-palette-neutral-50)',
          solidBorder: 'var(--joy-palette-primary-500)',
          solidDisabledBorder: 'var(--joy-palette-primary-300)',
          outlinedColor: 'var(--joy-palette-neutral-700)',
          outlinedHoverBg: 'var(--joy-palette-neutral-50)',
          outlinedActiveBg: 'var(--joy-palette-neutral-50)',
          outlinedActiveBorder: 'var(--joy-palette-primary-500)',
          outlinedHoverBorder: 'var(--joy-palette-primary-500)',
          outlinedBorder: 'var(--joy-palette-neutral-300)',
          outlinedDisabledBorder: 'var(--joy-palette-primary-300)',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F4F7FD',
          200: '#E4EBFA',
          300: '#828FA3',
          400: '#3E3F4E',
          500: '#2B2C37',
          600: '#20212c',
          700: '#000112',
          800: undefined,
          900: undefined,
        },
        danger: {
          50: '#FF9898',
          100: '#EA5555',
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          solidBg: 'var(--joy-palette-danger-100)',
          solidColor: 'var(--joy-palette-neutral-50)',
          solidHoverBg: 'var(--joy-palette-danger-50)',
          solidActiveBg: 'var(--joy-palette-danger-100)',
          outlinedActiveBg: 'var(--joy-palette-neutral-50)',
          outlinedColor: 'var(--joy-palette-neutral-700)',
          outlinedHoverBg: 'var(--joy-palette-neutral-50)',
          outlinedBorder: 'var(--joy-palette-danger-100)',
        },
        secondary: {
          solidActiveBg: '#dfdff3',
          solidBg: '#dfdff3',
          solidColor: '#635FC7',
          solidDisabledBg: '#E4EBFA',
          solidDisabledColor: '#635FC7',
          solidHoverBg: '#b1afe3',
        },
        background: {
          body: 'var(--joy-palette-neutral-50)',
          level1: 'var(--joy-palette-neutral-100)',
          level2: 'var(--joy-palette-neutral-200)',
          surface: 'var(--joy-palette-neutral-50)',
          backdrop: 'var(--joy-palette-neutral-50)',
        },
      },
    },
    dark: {
      palette: {
        primary: {
          50: '#d0cfee',
          100: '#A8A4FF',
          200: '#635FC7',
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          solidHoverBg: 'var(--joy-palette-primary-400)',
          solidDisabledColor: 'var(--joy-palette-neutral-50)',
          solidDisabledBg: 'var(--joy-palette-primary-300)',
          solidBg: 'var(--joy-palette-primary-200)',
          solidActiveBg: 'var(--joy-palette-primary-200)',
          outlinedColor: 'var(--joy-palette-neutral-50)',
          outlinedBorder: 'var(--joy-palette-neutral-300)',
          outlinedBg: 'var(--joy-palette-neutral-500)',
          outlinedHoverBg: 'var(--joy-palette-neutral-500)',
          outlinedActiveBg: 'var(--joy-palette-neutral-200)',
          outlinedActiveBorder: 'var(--joy-palette-primary-500)',
        },
        neutral: {
          50: '#FFFFFF',
          100: '#F4F7FD',
          200: '#E4EBFA',
          300: '#828FA3',
          400: '#3E3F4E',
          500: '#2B2C37',
          600: '#20212c',
          700: '#000112',
          800: undefined,
          900: undefined,
        },
        danger: {
          50: '#FF9898',
          100: '#EA5555',
          200: undefined,
          300: undefined,
          400: undefined,
          500: undefined,
          600: undefined,
          700: undefined,
          800: undefined,
          900: undefined,
          solidColor: 'var(--joy-palette-neutral-50)',
          solidBg: 'var(--joy-palette-danger-100)',
          solidHoverBg: 'var(--joy-palette-danger-50)',
          solidActiveBg: 'var(--joy-palette-danger-100)',
          outlinedColor: 'var(--joy-palette-neutral-50)',
          outlinedBorder: 'var(--joy-palette-danger-100)',
          outlinedHoverBg: 'var(--joy-palette-neutral-500)',
        },
        secondary: {
          solidActiveBg: '#dfdff3',
          solidBg: '#dfdff3',
          solidColor: '#635FC7',
          solidDisabledBg: '#E4EBFA',
          solidDisabledColor: '#635FC7',
          solidHoverBg: '#b1afe3',
        },
        background: {
          body: 'var(--joy-palette-neutral-600)',
          popup: 'var(--joy-palette-neutral-600)',
          level1: 'var(--joy-palette-neutral-500)',
          level2: 'var(--joy-palette-neutral-400)',
          surface: 'var(--joy-palette-neutral-600)',
        },
      },
    },
  },
});

export default theme;
