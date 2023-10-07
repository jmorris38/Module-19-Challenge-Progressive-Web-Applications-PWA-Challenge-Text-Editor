(()=> {
    var regeneratorRuntime = function () {
        function wrap(innerFn) {
            return new Promise(function (resolve, reject) {
                var generator = innerFn.apply(this, arguments);

                function handle(result) {
                    try {
                        var value = generator[result.method](result.arg);
                        var done = value.done;
                    } catch (error) {
                        reject(error);
                        return;
                    }
                    if (done) {
                        resolve(value.value);
                    } else {
                        Promise.resolve(value.value).then(
                            function (value) {
                                handle({ value: value, method: "next" });
                            },
                            function (err) {
                                handle({ value: err, method: "throw" });
                            }
                        );
                    }
                }

                var arg = arguments.length > 1 ? arguments[1] : undefined;

                if (typeof generator === "function") {
                    handle({ value: arg, method: "next" });
                }
            });
        }
        return wrap;
    }();

    var installButton = document.getElementById("buttonInstall");

    window.addEventListener("beforeinstallprompt", function (event) {
        window.deferredPrompt = event;
        installButton.classList.toggle("hidden", false);
    });

    installButton.addEventListener("click", function () {
        return regeneratorRuntime.async(function t() {
            var deferredPrompt;
            return regeneratorRuntime.wrap(function (t) {
                while (1) {
                    switch ((t.prev = t.next)) {
                        case 0:
                            if (!(deferredPrompt = window.deferredPrompt)) {
                                t.next = 3;
                                break;
                            }
                            t.next = 3;
                            return regeneratorRuntime.awrap(deferredPrompt.prompt());

                        case 3:
                            window.deferredPrompt = null;
                            installButton.classList.toggle("hidden", true);

                        case 5:
                        case "end":
                            return t.stop();
                    }
                }
            }, t);
        })();
    });

    window.addEventListener("appinstalled", function (event) {
        window.deferredPrompt = null;
    });
})();
