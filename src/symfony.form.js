
(function (Twig) {
    
// SimpleFunction('form_widget', null, array('node_class' => 'Symfony\Bridge\Twig\Node\SearchAndRenderBlockNode'
// SimpleFunction('form_errors', null, array('node_class' => 'Symfony\Bridge\Twig\Node\SearchAndRenderBlockNode'
// SimpleFunction('form_label', null, array('node_class' => 'Symfony\Bridge\Twig\Node\SearchAndRenderBlockNode'
// SimpleFunction('form_row', null, array('node_class' => 'Symfony\Bridge\Twig\Node\SearchAndRenderBlockNode'
// SimpleFunction('form_rest', null, array('node_class' => 'Symfony\Bridge\Twig\Node\SearchAndRenderBlockNode'
// SimpleFunction('form', null, array('node_class' => 'Symfony\Bridge\Twig\Node\RenderBlockNode'
// SimpleFunction('form_start', null, array('node_class' => 'Symfony\Bridge\Twig\Node\RenderBlockNode'
// SimpleFunction('form_end', null, array('node_class' => 'Symfony\Bridge\Twig\Node\RenderBlockNode'
// SimpleFunction('csrf_token', array($this, 'renderCsrfToken')),
    
    // helper
    Twig.extendFilter('humanize', function (value) {
        if (!value) return '';
        
        var str = value.replace(/([A-Z])/, '_$1').replace('/[_\s]+/', ' ').toLowerCase().trim();
        
        var firstChar = str.charAt(0).toUpperCase();
        return firstChar + str.substr(1);
    });
    
    Twig.extendFunction('form_errors', function (value) {
            
    });

    Twig.extendFunction('form_label', function (value) {
            
    });

    Twig.extendFunction('form_widget', function (value) {
            
    });

    Twig.extendFunction('form_rest', function (value) {
            
    });

    Twig.extendFunction('form_start', function (value) {
            
    });

    Twig.extendFunction('form_end', function (value) {
            
    });

    Twig.extendFunction('render_rest', function (value) {
            
    });

})(Twig || { });
