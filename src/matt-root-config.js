import { registerApplication, start } from "single-spa";

/*registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    import(
       webpackIgnore: true 
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: ["/"],
});
*/

registerApplication({
   name: "@matt/micro1",
   app: () =>
     import(
       /* webpackIgnore: true */
       "@matt/micro1"
     ),
   activeWhen: ["/"],
 });

 registerApplication({
  name: "@matt/micro2",
  app: () =>
    import(
      /* webpackIgnore: true */
      "@matt/micro2"
    ),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
