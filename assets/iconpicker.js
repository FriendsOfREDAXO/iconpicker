$(document).on('ready pjax:success mblock:add',function() {
    $('.icp').each(function() {
        var $this = $(this);

        if (!$this.parent().hasClass('iconpicker-container')) {
            if ($this.hasClass('icp-group')) {
                $this.wrap('<div class="input-group"/>').after('<span class="input-group-addon"/>');
            }
            $this.iconpicker();
        }
    });
});
