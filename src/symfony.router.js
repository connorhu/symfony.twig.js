
(function (Twig) {
    
    Twig.extendFunction('url', function (value, args) {
        args = args || {};
        
        delete args._keys; // wtf?
        
        return Routing.generate(value, args);
    });

})(Twig || { });
