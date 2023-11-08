import { extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  typography: {
    fontFamily: 'Plus Jakarta Sans,  sans-serif',
  },
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: '#000112',
        },
        focusVisible: '#635FC7',
        textSecon: '#828FA3',
        textPrime: '#000112',
        dangerColor: '#EA5555',
        danger: {
          300: '#EA5555',
          400: '#EA5555',
          500: '#EA5555',
        },

        btnDanger: {
          solidBorder: 'var(--joy-palette-dangerColor)',
          solidBg: 'var(--joy-palette-dangerColor)',
          solidColor: '#FFFFFF',

          solidActiveBg: 'var(--joy-palette-dangerColor)',
          solidActiveBorder: 'var(--joy-palette-dangerColor)',

          solidHoverBg: '#FF9898',
          solidHoverBorder: '#FF9898',
        },

        btnCross: {
          100: '#828FA3',
          plainBorder: 'transparent',
          plainColor: '#828FA3',
          plainHoverColor: '#EA5555',

        },
        btnPrime: {
          100: '#FFFFFF',
          200: '#F4F7FD',
          300: '#d0cfee',
          400: '#A8A4FF',
          500: '#635FC7',
          solidBorder: 'var(--joy-palette-btnPrime-500)',
          solidBg: 'var(--joy-palette-btnPrime-500)',
          solidColor: 'var(--joy-palette-btnPrime-100)',

          solidActiveBg: 'var(--joy-palette-btnPrime-500)',
          solidActiveBorder: 'var(--joy-palette-btnPrime-500)',

          solidHoverBg: 'var(--joy-palette-btnPrime-400)',
          solidHoverBorder: 'var(--joy-palette-btnPrime-400)',

          solidDisabledBorder: 'var(--joy-palette-btnPrime-300)',
          solidDisabledBg: 'var(--joy-palette-btnPrime-300)',
          solidDisabledColor: 'var(--joy-palette-btnPrime-200)',
        },
        btnList: {
          100: '#FFFFFF',
          200: '#F4F7FD',
          300: '#d0cfee',
          400: '#A8A4FF',
          500: '#635FC7',
          plainColor: '#828FA3',
          softColor: '#635FC7',

          plainHoverColor: '#635FC7',
          plainHoverBg: '#dfdff3',

          plainDisabledBg: '#635FC7',
          plainDisabledColor: '#FFFFFF',
        },
        dropDownDelete: {
          plainColor: '#FF9898',
          plainHoverColor: '#EA5555',
        },
        dropDownEdit: {
          plainColor: '#828FA3',
          plainHoverColor: '#635FC7',
        },

        btnListSelected: {
          plainBg: '#635FC7',
          plainColor: '#FFFFFF',
        },

        btnSecon: {
          100: '#FFFFFF',
          200: '#F4F7FD',
          300: '#d0cfee',
          400: '#A8A4FF',
          500: '#dfdff3',
          solidBg: '#dfdff3',
          solidBorder: '#dfdff3',
          solidColor: '#635FC7',

          solidActiveBg: '#dfdff3',
          solidActiveBorder: '#dfdff3',

          solidHoverBg: '#b1afe3',
          solidHoverBorder: '#b1afe3',

          solidDisabledBg: '#E4EBFA',
          solidDisabledColor: '#635FC7',
          solidDisabledBorder: '#E4EBFA',
        },
        btnHelper: {
          plainColor: '#828FA3',
          plainBg: 'transparent',
          plainHoverBg: 'transparent',
          plainHoverColor: '#000112',
        },
        selectPrime: {
          50: '#dfdff3',
          100: '#FFFFFF',
          200: '#F4F7FD',
          300: '#d0cfee',
          400: '#A8A4FF',
          500: '#635FC7',
          600: '#000112',
          outlinedColor: 'var(--joy-palette-selectPrime-600)',
          outlinedBorder: 'var(--joy-palette-selectPrime-50)',

          outlinedHoverBorder: 'var(--joy-palette-selectPrime-500)',

          outlinedActiveBorder: 'var(--joy-palette-selectPrime-500)',

          outlinedDisabledBorder: 'var(--joy-palette-primary-300)',
        },
        inputPrime: {
          50: '#dfdff3',
          100: '#FFFFFF',
          200: '#000112',
          300: '#635FC7',
          outlinedColor: 'var(--joy-palette-inputPrime-200)',
          outlinedBorder: 'var(--joy-palette-inputPrime-50)',
          outlinedActiveBorder: 'var(--joy-palette-inputPrime-300)',
          outlinedFocusBorder: 'var(--joy-palette-inputPrime-300)',
          outlinedHoverBorder: 'var(--joy-palette-inputPrime-300)',
        },

        checkBoxPrime: {
          // solidBg: '#FFFFFF',
          solidBg: 'var(--joy-palette-background-popup)',
          solidBorder: '#828FA3',
          solidColor: '#828FA3',
          solidHoverColor: '#000112',
        },

        background: {
          50: '#FFFFFF',
          100: '#F4F7FD',
          200: '#E4EBFA',
          300: '#828FA3',
          400: '#3E3F4E',
          500: '#2B2C37',
          600: '#20212c',
          700: '#000112',
          // body: 'var(--joy-palette-background-200)',
          body: '#E9EFFA',

          popup: 'var(--joy-palette-background-50)',
          // body: 'var(--joy-palette-background-200)'
          // level1: 'var(--joy-palette-neutral-100)',
          // level2: 'var(--joy-palette-neutral-200)',
          surface: '#F4F7FD',
          // backdrop: 'var(--joy-palette-neutral-50)',
        },
      },
    },
    dark: {
      palette: {
        text: {
          primary: '#FFFFFF',
        },
        focusVisible: '#635FC7',
        textSecon: '#828FA3',
        textPrime: '#FFFFFF',
        danger: {
          300: '#EA5555',
          400: '#EA5555',
          500: '#EA5555',
        },

        selectPrime: {
          50: '#dfdff3',
          100: '#FFFFFF',
          200: '#F4F7FD',
          300: '#d0cfee',
          400: '#A8A4FF',
          500: '#635FC7',
          600: '#000112',
          outlinedColor: 'var(--joy-palette-selectPrime-100)',
          outlinedBorder: '#2B2C37',

          outlinedHoverBorder: 'var(--joy-palette-selectPrime-500)',

          outlinedActiveBorder: 'var(--joy-palette-selectPrime-500)',

          outlinedDisabledBorder: 'var(--joy-palette-primary-300)',
        },
        inputPrime: {
          50: '#dfdff3',
          100: '#FFFFFF',
          200: '#000112',
          300: '#635FC7',
          outlinedColor: 'var(--joy-palette-inputPrime-100)',
          outlinedBorder: '#828FA3',

          outlinedActiveBorder: 'var(--joy-palette-inputPrime-300)',
          outlinedFocusBorder: 'var(--joy-palette-inputPrime-300)',
          outlinedHoverBorder: 'var(--joy-palette-inputPrime-300)',
        },
        checkBoxPrime: {
          // solidBg: '#FFFFFF',
          solidBg: 'var(--joy-palette-background-surface)',
          solidBorder: 'var(--joy-palette-background-surface)',

          solidColor: '#828FA3',
          solidHoverColor: '#000112',
        },
        background: {
          50: '#FFFFFF',
          100: '#F4F7FD',
          200: '#E4EBFA',
          300: '#828FA3',
          400: '#3E3F4E',
          500: '#2B2C37',
          600: '#20212c',
          700: '#000112',
          body: 'var(--joy-palette-background-600)',
          popup: 'var(--joy-palette-background-600)',
          surface: 'var(--joy-palette-background-500)',
        },
      },

    },
  },
});

export default theme;
