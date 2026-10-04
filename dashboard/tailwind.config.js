/** @type {import('tailwindcss').Config} */
// Reference-sheet house style (design/reference-sheet/sheet.css). Tokens live as CSS variables in
// styles/globals.css (light default, dark via prefers-color-scheme); Tailwind only maps names onto them.
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    borderRadius: { none: '0', DEFAULT: '0' }, // square corners everywhere
    extend: {
      colors: {
        paper: 'var(--paper)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        hair: 'var(--hair)',
        zebra: 'var(--zebra)',
        tint: 'var(--tint)',
        sheetblue: 'var(--blue)',
        sheetred: 'var(--red)',
      },
      fontFamily: {
        sans: ['var(--f-sans)'],
        mono: ['var(--f-mono)'],
      },
      borderWidth: { sheet: '1.25px' },
    },
  },
  plugins: [],
}
