// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
      apiKey: 'AIzaSyDAxHYB0zIu3s91mRtZh7WDxDoSkTqTT3k',
      authDomain: 'angular-ejercicios.firebaseapp.com',
      databaseURL: 'https://angular-ejercicios.firebaseio.com',
      projectId: 'angular-ejercicios',
      storageBucket: 'angular-ejercicios.appspot.com',
      messagingSenderId: '472426830814'
  }
};
