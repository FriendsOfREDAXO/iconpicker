<?php

class rex_yform_value_bi_iconpicker extends rex_yform_value_text
{
    public function enterObject()
    {
        $this->setValue((string) $this->getValue());

        if ('' == $this->getValue() && !$this->params['send']) {
            $this->setValue($this->getElement('default'));
        }

        if ($this->needsOutput() && $this->isViewable()) {
            $templateParams = [];
            if (!$this->isEditable()) {
                $attributes = empty($this->getElement('attributes')) ? [] : json_decode($this->getElement('attributes'), true);
                $attributes['readonly'] = 'readonly';
                $this->setElement('attributes', json_encode($attributes));
                $this->params['form_output'][$this->getId()] = $this->parse('value.bi_iconpicker.tpl.php', $templateParams);
            } else {
                $this->params['form_output'][$this->getId()] = $this->parse('value.bi_iconpicker.tpl.php', $templateParams);
            }
        }

        $this->params['value_pool']['email'][$this->getName()] = $this->getValue();

        if ($this->saveInDb()) {
            $this->params['value_pool']['sql'][$this->getName()] = $this->getValue();
        }
    }

    public function getDescription(): string
    {
        return 'bi_iconpicker|name|label|defaultwert|[no_db]|[attributes]|[notice]|[prepend]';
    }

    public function getDefinitions(): array
    {
        return [
            'type' => 'value',
            'name' => 'bi_iconpicker',
            'values' => [
                'name' => ['type' => 'name',    'label' => rex_i18n::msg('yform_values_defaults_name')],
                'label' => ['type' => 'text',    'label' => rex_i18n::msg('yform_values_defaults_label')],
                'default' => ['type' => 'text',    'label' => rex_i18n::msg('yform_values_text_default')],
                'no_db' => ['type' => 'no_db',   'label' => rex_i18n::msg('yform_values_defaults_table'),  'default' => 0],
                'attributes' => ['type' => 'text',    'label' => rex_i18n::msg('yform_values_defaults_attributes'), 'notice' => rex_i18n::msg('yform_values_defaults_attributes_notice')],
                'notice' => ['type' => 'text',    'label' => rex_i18n::msg('yform_values_defaults_notice')],
            ],
            'description' => rex_i18n::msg('yform_values_iconpicker_description'),
            'db_type' => ['varchar(191)', 'text'],
            'famous' => false,
            'hooks' => [
                'preDefault' => static function (rex_yform_manager_field $field) {
                    return $field->getElement('default');
                },
            ],
        ];
    }

    public static function getListValue($params)
    {
        return '<i class="' . $params['subject'] . '"> ' . $params['subject'] . '</i>';
    }
}
