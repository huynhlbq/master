var baseConfig = {
    protocol: 'http://',
    server: /*@restURL*/'192.168.1.32',
    buildTime: /*@buildTime*/'buildTime',
    buildRevision: /*@buildRevision*/'buildRevision',
    preferredIP: null,
    standardServicePort: ':8080',
    websocketServicePort: ':7777',
    baseUrlEnding: '/affnet/higgsup/v1/api/'
};

var baseUrl = baseConfig.protocol + baseConfig.server + baseConfig.standardServicePort + baseConfig.baseUrlEnding;

var config = {
    getAllDataPublisher : baseUrl,
    getAllDataSubscriber : baseUrl
};