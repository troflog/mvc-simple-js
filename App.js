$(function () {
    var model = new TaskModel(),
        view = new TaskView(model),
        controller = new TaskController(model, view);
glmw.init().then(instance => {
    init();
    });
    function init() {
    // glmw
    {
        let ns = glmw.mat4;
        glmw.m 
        let a = ns.create();
        let b = ns.create();
        let now = performance.now();
        for (let ii = 0; ii < 1000; ++ii) {
        ns.multiply(a, a, b);
        };
        let then = performance.now();
        console.log("WebAssembly:", then - now, "ms", ns.view(a));
    }
    // gl-matrix
    {
        let ns = mat4;
        let a = ns.create();
        let b = ns.create();
        let now = performance.now();
        for (let ii = 0; ii < 1000; ++ii) {
        ns.multiply(a, a, b);
        };
        let then = performance.now();
        console.log("JavaScript:", then - now, "ms", a);
    }
    };

});
