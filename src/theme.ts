// theme.ts
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  components: {
    Tabs: {
      baseStyle: {
        tabpanel: {
          p: 0, // remove padding
        },
      },
    },
  },
});

export default theme;
