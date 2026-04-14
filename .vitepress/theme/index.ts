import DefaultTheme from 'vitepress/theme'
import MyLayout from './MyLayout.vue'
import NewsletterSignup from './NewsletterSignup.vue'
import './custom.css'


export default {
  ...DefaultTheme,
  Layout: MyLayout,
  NotFound: () => 'custom 404',
  enhanceApp({app, router, siteData}){
    app.component('NewsletterSignup', NewsletterSignup)
  }
}
