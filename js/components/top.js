Vue.component('top', {
  template: `
  <div>
    <itemHeader></itemHeader>
    <topview></topview>
    <topnav></topnav>
    <about></about>
    <rinen></rinen>
    <message></message>
    <business></business>
    <steps></steps>
    <overview></overview>
    <access></access>
    <banner></banner>
    <itemFooter></itemFooter>
  </div>
  `,
  components: {
    'itemHeader': itemHeader,
    'topview': topview,
    'topnav': topnav,
    'about': about,
    'rinen': rinen,
    'message': message,
    'business': business,
    'steps': steps,
    'overview': overview,
    'access': access,
    'banner': banner,
    'itemFooter': itemFooter,
  },
})
