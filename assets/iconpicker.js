$(document).on('rex:ready pjax:success mblock:add', function () {
    window.setTimeout(function() {
        $('.icp').each(function () {
            var $this = $(this);

            if (typeof $this.data('iconpicker') == 'undefined') {
                if ($this.hasClass('icp-group') && !$this.next().hasClass('input-group-addon')) {
                    $this.wrap('<div class="input-group"/>').after('<span class="input-group-addon"/>');
                }
                $this.iconpicker();
            }
        });
    }, 500);
});
