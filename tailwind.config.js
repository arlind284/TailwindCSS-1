module.exports = {
  purge: {
    enabled: true,
    content: ['public/index.html'],

  },
  theme: {
    extend: {
      colors: {
        bgcolor: "#F1F2F3",
        secondary: "#0D1F35",
        sub: "#2A97CF",
        btxt: "#0D1F35",
        lclr: "#838383",
        ftr: "#0D1F35",
        ftrclr: "#0D1F35B3",
        linkclr: "#2A97CF",
      },
      fontFamily: {
        body: ['Aktiv Grotesk'],
      },
      fontSize: {
        'header': '15px',
      },
      spacing: {
        '20': '19.5rem',
      },
    },
  },
  variants: {},
  plugins: [],
}
