export const colorTokens = {
    grey: { 
      0: "#FFFFFF",
      10: "#303130",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
      1010: "#343541",
      1020: "#36454F",
      1030: "#333366",
      1040:"#191970",
    },
    primary: {
       
      50: "#83d18d",
      100: "#7ece89",
      200: "#77cb83",
      300: "#70c77d",
      400: "#68c377",
      500: "#e8e4e3",
      600: "#5bb76c",
      700: "#56af68",
      800: "#51a763",
      900: "#4da05e",
    },
  };
  
  export const themeSettings = (mode) => {
    return {
      palette: {
        primary: {
          dark: colorTokens.primary[1010],
          main: colorTokens.primary[500],
          light: colorTokens.primary[50],
        },
        neutral: {
          dark: colorTokens.grey[700],
          main: colorTokens.grey[500],
          mediumMain: colorTokens.grey[400],
          medium: colorTokens.grey[200],
          light: colorTokens.grey[50],
        },
        background: {
          default: colorTokens.grey[0],
          alt: colorTokens.grey[1010],
          basic: colorTokens.grey[10]
        },
      },
      typography: {
        fontSize: 12,
        h1: {
          fontSize: 40,
        },
        h2: {
          fontSize: 32,
        },
        h3: {
          fontSize: 24,
        },
        h4: {
          fontSize: 20,
        },
        h5: {
          fontSize: 16,
        },
        h6: {
          fontSize: 14,
        },
      },
    };
  };