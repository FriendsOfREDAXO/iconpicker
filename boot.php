<?php
if (rex::isBackend()) {
	rex_view::addCssFile($this->getAssetsUrl('vendor/fontawesome/css/all.min.css'));
    rex_view::addCssFile($this->getAssetsUrl('vendor/fontawesome-iconpicker/css/fontawesome-iconpicker.css'));
    rex_view::addJsFile($this->getAssetsUrl('vendor/fontawesome-iconpicker/js/fontawesome-iconpicker.js'));
    rex_view::addJsFile($this->getAssetsUrl('iconpicker.js'));
}
