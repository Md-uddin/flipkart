import { createContext } from "react";
import { CssBaseline } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
const TemplateContext = createContext(null);
export const Templateprovider = ({ children }) => {
  const theme = createMuiTheme({
    overrides: {
      MuiDialog: {
        papperwidthsm: {
          maxwidth: "unset",
        },
      },
      MuiDialogContentRoot: {
        paddingTop: 0,
      },
      MuiTableCell: {
        root: {
          border: '0px',
        },
      },
    },
  });
  return (
    <TemplateContext.Provider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </TemplateContext.Provider>
  );
};
