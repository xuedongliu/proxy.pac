var FindProxyForURL = function(init, profiles) {
    return function(url, host) {
        "use strict";
        var result = init, scheme = url.substr(0, url.indexOf(":"));
        do {
            result = profiles[result];
            if (typeof result === "function") result = result(url, host, scheme);
        } while (typeof result !== "string" || result.charCodeAt(0) === 43);
        return result;
    };
}("+auto switch", {
    "+auto switch": function(url, host, scheme) {
        "use strict";
        if (/(?:^|\.)facebook\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)fbcdn\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)scorecardresearch\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)outbrain\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pushbullet\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google-analytics\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)facebook\.net$/.test(host)) return "+proxy";
        if (/(?:^|\.)disqus\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)apkmirror\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)evozi\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)brave\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ssl-images-amazon\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)appinn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)pornhub\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)phncdn\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)surge\.sh$/.test(host)) return "+proxy";
        if (/(?:^|\.)statsvn\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)mailboxapp\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)tumblr\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.cn$/.test(host)) return "+proxy";
        if (/(?:^|\.)twitter\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)s3\.amazonaws\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wandergis\.github\.io$/.test(host)) return "+proxy";
        if (/(?:^|\.)jianshukeji\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)resilio\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)getsync\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)maps\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)chartjs\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)google-developers\.appspot\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)t\.me$/.test(host)) return "+proxy";
        if (/(?:^|\.)xmarks\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)echartsjs\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)flyzy2005\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)google\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)apple\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)gitbook\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)firebasestorage\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)baidu\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)securetoken\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)firebaseio\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)www\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)epubee\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)experiments\.withgoogle\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)news-lab-trends-experiment\.appspot\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ggpht\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)ytimg\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)youtube\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)iqiyi\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)qq\.com$/.test(host)) return "DIRECT";
        if (/(?:^|\.)reddit\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)wikipedia\.org$/.test(host)) return "+proxy";
        if (/(?:^|\.)ajax\.googleapis\.com$/.test(host)) return "+proxy";
        if (/(?:^|\.)googleusercontent\.com$/.test(host)) return "+proxy";
        return "DIRECT";
    },
    "+proxy": function(url, host, scheme) {
        "use strict";
        if (/^127\.0\.0\.1$/.test(host) || /^::1$/.test(host) || /^localhost$/.test(host)) return "DIRECT";
        return "SOCKS5 127.0.0.1:6153; SOCKS 127.0.0.1:6153";
    }
});