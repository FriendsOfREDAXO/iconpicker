<h3>Funktionen</h3>

<p>Das Iconpicker-AddOn verwendet folgendes Skript:<br>
<a href="http://mjolnic.com/fontawesome-iconpicker/" target="_blank" href="">http://mjolnic.com/fontawesome-iconpicker/</a></p>

<p>Eventuelle Anpassungen beim Aufruf des Iconpickers können amn besten in die Datei assets/iconpicker.js geschrieben werden.</p>

<h3>Benutzung</h3>
<p>Um den Iconpicker für ein Textfeld zu aktivieren, diesem die CSS-Klasse "icp" zuweisen.</p>

<pre>
<?php
echo htmlspecialchars('<input class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">');
?>
</pre>

<img src="../assets/addons/iconpicker/iconpicker1.jpg" style="border: 1px solid #ccc; margin: 30px 0; max-width: 100%;">

<h3>Hinweis</h3>
<p>Damit das Popup nicht abgeschnitten wird, muss der Container form-group die CSS-Eigenschaft <code>overflow: visible</code> haben.<br>
Die Position des Popups kann über <code>data-placement</code> bestimmt werden.</p>
<p>Der vollständiger Beispiel-Code für ein Modul könnte also so aussehen:</p>

<pre>
<?php
echo htmlspecialchars('<div class="form-group" style="overflow: visible;">
	<label class="col-sm-2 control-label">Icon</label>
	<div class="col-sm-10">
		<input data-placement="bottomRight" class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
	</div>
</div>');
?>
</pre>

<hr>

<h3>Filtern direkt im Input-Feld</h3>
<p>Um die Icons direkt im Input-Feld zu filtern, wird <code>data-input-search="true"</code> gesetzt:</p>

<pre>
<?php
echo htmlspecialchars('<input data-input-search="true" class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">');
?>
</pre>

<img src="../assets/addons/iconpicker/iconpicker2.jpg" style="border: 1px solid #ccc; margin: 30px 0; max-width: 100%;">

<hr>

<h3>Darstellung als "Input Group"</h3>
<p>Auch die in Bootstrap bekannte Komponente einer "Input group" ist möglich:</p>

<pre>
<?php
echo htmlspecialchars('<div class="input-group">
	<input data-placement="bottomRight" class="form-control icp" type="text" name="REX_INPUT_VALUE[1]" value="REX_VALUE[1]">
	<span class="input-group-addon"></span>
</div>');
?>
</pre>

<img src="../assets/addons/iconpicker/iconpicker3.jpg" style="border: 1px solid #ccc; margin: 30px 0; max-width: 100%;">


<hr>

<p>Danke an @tbaddade für Inspiration.</p>
