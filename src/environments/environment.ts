export const environment = {"production":false,"ui":{"ssl":false,"host":"localhost","port":4000,"nameSpace":"/","rateLimiter":{"windowMs":60000,"max":500},"baseUrl":"http://localhost:4000/"},"rest":{"ssl":true,"host":"api7.dspace.org","port":443,"nameSpace":"/server","baseUrl":"https://api7.dspace.org/server"},"cache":{"msToLive":{"default":900000},"control":"max-age=60","autoSync":{"defaultTime":0,"maxBufferSize":100,"timePerMethod":{"PATCH":3}}},"auth":{"ui":{"timeUntilIdle":900000,"idleGracePeriod":300000},"rest":{"timeLeftBeforeTokenRefresh":120000}},"form":{"validatorMap":{"required":"required","regex":"pattern"}},"notifications":{"rtl":false,"position":["top","right"],"maxStack":8,"timeOut":5000,"clickToClose":true,"animate":"scale"},"submission":{"autosave":{"metadata":[],"timer":0},"icons":{"metadata":[{"name":"dc.author","style":"fas fa-user"},{"name":"default","style":""}],"authority":{"confidence":[{"value":600,"style":"text-success"},{"value":500,"style":"text-info"},{"value":400,"style":"text-warning"},{"value":"default","style":"text-muted"}]}}},"universal":{"preboot":true,"async":true,"time":false},"debug":false,"defaultLanguage":"en","languages":[{"code":"en","label":"English","active":true},{"code":"de","label":"Deutsch","active":true},{"code":"cs","label":"Čeština","active":true},{"code":"nl","label":"Nederlands","active":true},{"code":"pt-BR","label":"Português do Brasil","active":true},{"code":"pt-PT","label":"Português","active":true},{"code":"fr","label":"Français","active":true},{"code":"lv","label":"Latviešu","active":true},{"code":"fi","label":"Suomi","active":true},{"code":"hu","label":"magyar","active":true}],"browseBy":{"oneYearLimit":10,"fiveYearLimit":30,"defaultLowerLimit":1900,"types":[{"id":"title","type":"title"},{"id":"dateissued","type":"date","metadataField":"dc.date.issued"},{"id":"author","type":"metadata"},{"id":"subject","type":"metadata"}]},"item":{"edit":{"undoTimeout":10000}},"collection":{"edit":{"undoTimeout":10000}},"themes":[{"name":"dspace"}],"mediaViewer":{"image":false,"video":false}}