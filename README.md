# Iconpicker-AddOn für REDAXO 5

Für Font Awesome-Icons, auch andere Font-Icons möglich

![iconpicker](https://cloud.githubusercontent.com/assets/330160/15984770/f63f8c90-2fd6-11e6-9581-2cc6e9873909.png)

## Funktionen

Das Iconpicker-AddOn verwendet folgendes Skript:
<a href="http://mjolnic.com/fontawesome-iconpicker/" target="_blank" href="">http://mjolnic.com/fontawesome-iconpicker/</a></p>

Eventuelle Anpassungen beim Aufruf des Iconpickers können amn besten in die Datei ```assets/iconpicker.js``` geschrieben werden.

## Benutzung
Um den Iconpicker für ein Textfeld zu aktivieren, diesem die CSS-Klasse "icp" zuweisen.  
Über data-placement kann die Position des Popups definiert werden.  
Beispiel:  

```
input data-placement="bottomRight" class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]"
```

## Hinweis
Damit das Popup nicht abgeschnitten wird, muss der Container form-group die CSS-Eigenschaft overflow: visible haben.

Danke an @tbaddade für Inspiration.
