const Module = (function() {
    function private(){
        console.log("private");
    }
    return {
        PublicMethod: function() {
            console.log('public');
        }
    }
})();

Module.PublicMethod();
Module.private();