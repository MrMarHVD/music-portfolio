import 'vuetify/styles'
  import { createVuetify } from 'vuetify'
  import { aliases, mdi } from 'vuetify/iconsets/mdi'

  const vuetify = createVuetify({
    theme: {
      defaultTheme: 'light',
      themes: {
        light: {
          colors: {
            primary: 'white',
            secondary: '#BEBEBE',
            error: '#FF5252',
            info: '#2196F3',
            success: '#4CAF50',
            warning: '#FFC107',
          },
        },
      },
    },
    icons: {
      defaultSet: 'mdi',
      aliases,
      sets: {
        mdi,
      },
    },

  })

  export default vuetify