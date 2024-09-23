# Iconpicker (Bootstrap Icons, FontAwesome 6) für REDAXO ^5.17

Stellt Icons von <https://icons.getbootstrap.com/> und die REDAXO 5.17-eingebauten <https://fontawesome.com/search> mit einem Icon-Auswahlfeld zur Verfügung.

![image](https://github.com/FriendsOfREDAXO/iconpicker/assets/3855487/c8360b9f-0a77-48e7-a7e9-02756c9fb9a4)

## Features

### Verwendung in YForm

Verwende das Value `bi_iconpicker`, um einen Icon Picker für Bootstrap Icons zur Verfügung zu stellen.
Verwende das Value `fa6_iconpicker`, um einen Icon Picker für Fontawesome 6 (Free) zur Verfügung zu stellen.

### Beispiele zur eigenen Verwendung im Backend (auch in Metainfos)

```html
<!-- Allgemeines Beispiel - so muss der Quellcode aussehen -->
<div class="input-group">
 <span class="input-group-addon selected-icon-0"></span>
 <input type="text" data-bi-iconpicker="0" value="bi-cloud-fog2" class="form-control bi-iconpicker" />
</div>
<!-- Beispiel für Moduleingaben - `#` anpassen -->
<div class="input-group">
 <span class="input-group-addon selected-icon-#"></span>
 <input type="text" data-bi-iconpicker="#" name="REX_INPUT_VALUE[#]" value="REX_VALUE[#]" class="form-control bi-iconpicker" />
</div>
```
```html
<!-- Allgemeines Beispiel - so muss der Quellcode aussehen -->
<div class="input-group">
 <span class="input-group-addon selected-icon-0"></span>
 <input type="text" data-fa-iconpicker="0" value="rex-icon fa-cloud-fog2" class="form-control fa6-iconpicker" />
</div>
<!-- Beispiel für Moduleingaben - `#` anpassen -->
<div class="input-group">
 <span class="input-group-addon selected-icon-#"></span>
 <input type="text" data-bi-iconpicker="#" name="REX_INPUT_VALUE[#]" value="REX_VALUE[#]" class="form-control fa6-iconpicker" />
</div>
```

### Verwendung im Frontend

Die Verwendung im Frontend bleibt dem Entwickler überlassen. Nutze die beiliegende Icon-Schrift oder lade das passende SVG von <https://icons.getbootstrap.com/> bzw. FontAwesome 6.

## Lizenz

MIT Lizenz, siehe [LICENSE](https://github.com/friendsofredaxo/iconpicker/blob/master/LICENSE)  

## Autor

**Friends Of REDAXO**
http://www.redaxo.org
https://github.com/FriendsOfREDAXO


**Projekt-Lead**  
[Alexander Walther](https://github.com/alexplusde)

## Credits

Basierend auf <https://www.cssscript.com/bootstrap-5-icon-picker/>, vorarbeit geleistet unter <https://github.com/alexplusde/bs5_iconpicker>
