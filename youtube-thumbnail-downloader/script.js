    function initDownloadLinks (e) {
        var value = document.getElementById("input-text").value;
        var result = (extractValue(value));
        if (result === 0) {
            return 0;
        }
        appendImages(result);
        return false;
    }

    function initFunction () {
        document.getElementById("submitButton").onclick = function (e) {
            initDownloadLinks(e);
        }
    }

    function isMaxResAvailable (result) {
        var img = new Image()
        img.onload = function () {
            if (this.width < 1280) {
                document.getElementById("thumbnailmaxresimg").alt = "High resolution not available";
                isSDAvailalbe(result);
            }
        }
        img.onerror = function () {
            document.getElementById("thumbnailmaxresimg").alt = "High resolution not available";
            isSDAvailalbe(result);
        }
        img.src = "https://img.youtube.com/vi/" + result + "/maxresdefault.jpg";
    }

    function isSDAvailalbe (result) {
        var img = new Image()
        img.onload = function () {
            if (this.width === 120 && this.height === 90) {
                document.getElementById("thumbnailsdimg").alt = "Standard Quality not available";
            }
        }
        img.onerror = function () {
            document.getElementById("thumbnailsdimg").alt = "Standard Quality not available";
        }
        img.src = "https://img.youtube.com/vi/" + result + "/sddefault.jpg";
    }

    function appendImages (result) {
        document.getElementById("input-text").value = "https://youtube.com/watch?v=" + result;
        document.getElementById("thumbnailmaxresimg").setAttribute("src", "https://img.youtube.com/vi/" + result + "/maxresdefault.jpg");
        document.getElementById("thumbnailmaxres").setAttribute("href", "https://img.youtube.com/vi/" + result + "/maxresdefault.jpg");
        document.getElementById("thumbnailsdimg").setAttribute("src", "https://img.youtube.com/vi/" + result + "/sddefault.jpg");
        document.getElementById("thumbnailsd").setAttribute("href", "https://img.youtube.com/vi/" + result + "/sddefault.jpg");
        document.getElementById("thumbnailhqimg").setAttribute("src", "https://img.youtube.com/vi/" + result + "/hqdefault.jpg");
        document.getElementById("thumbnailhq").setAttribute("href", "https://img.youtube.com/vi/" + result + "/hqdefault.jpg");
        document.getElementById("thumbnailmqimg").setAttribute("src", "https://img.youtube.com/vi/" + result + "/mqdefault.jpg");
        document.getElementById("thumbnailmq").setAttribute("href", "https://img.youtube.com/vi/" + result + "/mqdefault.jpg");

        isMaxResAvailable(result);
    }

    function extractValue (data) {
        var res = data.match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)
        if (res == undefined) {
            alert("Please check the URL you have entered");
            return 0;
        }
        return res[1];
    }

    initFunction();