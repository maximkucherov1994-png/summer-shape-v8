
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#071719',
        deep: '#0b2529',
        mint: '#82e4d4',
        gold: '#f0c66a'
      }
    },
  },
  plugins: [],
}
export default config
