module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx,scss}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#325BDE",   // "bg-primary"
          dark: "#253683",      // "bg-primary-dark"
          light: "#dde8fc",     // "bg-primary-light"
        },
        dark: "#272727",
        light: "#EEEEEE",
        color: "#575757",
        muted: "#CCCCCC",
        danger: {
          DEFAULT: "#C93939",
          light: "#FBE5E5",
        },
        success: {
          DEFAULT: "#5CB338",
          light: "#DFF3D4",
        },
        warning: {
          DEFAULT: "#FFC720",
          light: "#FFF5C6",
        },
        info: {
          DEFAULT: "#1DE4D1",
          light: "#C7FFF6",
        },
        bordercolor: "#EDEDED",
      },

      fontSize: {
        xs: "0.75rem",   // 12px
        sm: "0.875rem",  // 14px
        base: "1rem",    // 16px
        lg: "1.125rem",  // 18px
        xl: "1.25rem",   // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
      },
    },
  },
  plugins: [],
}
