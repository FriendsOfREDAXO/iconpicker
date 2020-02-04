# Iconpicker-AddOn für REDAXO 5

Für Font Awesome-Icons, auch andere Font-Icons möglich

![screenshot_iconpicker](https://cloud.githubusercontent.com/assets/330160/15991766/e87b44c8-30bc-11e6-8bab-c7094d278d0d.jpg)

## Funktion

Das Iconpicker-AddOn verwendet folgendes Skript:
<a href="http://mjolnic.com/fontawesome-iconpicker/" target="_blank" href="">https://github.com/itsjavi/fontawesome-iconpicker</a></p>

Eventuelle Anpassungen beim Aufruf des Iconpickers können am besten in die Datei ```assets/iconpicker.js``` geschrieben werden.

## Benutzung

Um den Iconpicker für ein Textfeld zu aktivieren, diesem die CSS-Klasse "icp" zuweisen.
```html
<input class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
```

### Hinweis

Damit das Popup nicht abgeschnitten wird, muss der Container `form-group` die CSS-Eigenschaft `overflow: visible` haben.
Die Position des Popups kann über data-placement bestimmt werden.

Der vollständige Beispiel-Code für ein Modul könnte also so aussehen:

```html
<div class="form-group" style="overflow: visible;">
	<label class="col-sm-2 control-label">Icon</label>
	<div class="col-sm-10">
		<input data-placement="bottomRight" class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
	</div>
</div>
```

## Filtern direkt im Input-Feld

Um die Icons direkt im Input-Feld zu filtern, wird data-input-search="true" gesetzt:

```html
<input data-input-search="true" class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
```

## Darstellung als "Input Group"

Auch die in Bootstrap bekannte Komponente einer "Input group" ist möglich:

```html
<div class="input-group">
	<input data-placement="bottomRight" class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
	<span class="input-group-addon"></span>
</div>
```

oder als Alternative kann man auch einfach auf das Input-Element die Klasse ```icp-group``` setzen.

```html
<input data-placement="bottomRight" class="form-control icp icp-group" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
```

Danke an @tbaddade für Inspiration.
