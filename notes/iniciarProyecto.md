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
- creo el modulos core y el componente core/shell


