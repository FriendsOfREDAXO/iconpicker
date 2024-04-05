<?php

if (rex_addon::get('yform')->isAvailable()) {
    rex_yform::addTemplatePath(rex_path::addon('iconpicker', 'ytemplates'));
}

$addon = rex_addon::get('iconpicker');
rex_view::addCssFile($addon->getAssetsUrl('/font/bootstrap-icons.css'));

rex_view::addCssFile($addon->getAssetsUrl('/styles/bi.css'));
rex_view::addCssFile($addon->getAssetsUrl('/styles/fa6.css'));

rex_view::addJsFile($addon->getAssetsUrl('js/bi-iconpicker.js'));
rex_view::addJsFile($addon->getAssetsUrl('js/fa6-iconpicker.js'));

rex_view::addJsFile($addon->getAssetsUrl('js/bi-picker.js'));
rex_view::addJsFile($addon->getAssetsUrl('js/fa6-picker.js'));
