## Prefijo
- Editar prefijo a `goi` en `Angular-cli.json`
- Modifcar el `tslint.json` donde revisa el prefijo `directive-selector` y `component-selector`
- se puede hacer al iniciar el proyecto: `npm run ng new angular -p goi -is true -it true`

## configuracion
- `angular-cli.json` cambio para no generar archivos directamente
`"defaults": {
    "styleExt": "sass",
    "component": {
      "inlineStyle": true,
      "inlineTemplate": true
    }
  }`

## Esqueleto de la aplicación
- Elimino el componente pricipal `app`
- creo el modulos core y el componente core/shell lo exporto y lo utilizo en vez de app-root
- creo los otros modulo (about, home...) declaro pero no importo

### lasyLoad 
- la carga se hace por módulos no por componenetes
- en core.module `loadChildren: './../home/home.module.ts#HomeModule'`
- y en cada compente que carga `RouterModule.forChild(routes)` y la ruta


### componentes sin carpeta
- `ng g c home/home --flat true` 
