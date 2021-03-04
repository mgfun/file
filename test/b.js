$x('//*[@id="app"]/div/div[2]/div/div/div[1]/div[3]/div[1]/div/div[2]/div/div[2]/div[2]/ul/li/img/@src').forEach(function(v){console.log('https:'+v.value.split("@")[0])})
