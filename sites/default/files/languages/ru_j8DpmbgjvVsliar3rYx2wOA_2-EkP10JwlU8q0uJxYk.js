Drupal.locale = { 'pluralFormula': function ($n) { return Number((((($n%10)==1)&&(($n%100)!=11))?(0):((((($n%10)>=2)&&(($n%10)<=4))&&((($n%100)<10)||(($n%100)>=20)))?(1):2))); }, 'strings': {"":{"Remove group":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0443\u0441\u043b\u043e\u0432\u0438\u0435","Apply (all displays)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u0432\u0441\u0435 \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u044f)","Revert to default":"\u0412\u0435\u0440\u043d\u0443\u0442\u044c \u043a \u043d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0430\u043c \u043f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e","Apply (this display)":"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c (\u044d\u0442\u043e \u043e\u0442\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435)","Loading token browser...":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430 \u0431\u0440\u0430\u0443\u0437\u0435\u0440\u0430 \u043c\u0435\u0442\u043e\u043a...","Available tokens":"\u0414\u043e\u0441\u0442\u0443\u043f\u043d\u044b\u0435 \u0442\u043e\u043a\u0435\u043d\u044b","Insert this token into your form":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u044d\u0442\u043e\u0442 \u0442\u043e\u043a\u0435\u043d \u0432 \u0432\u0430\u0448\u0443 \u0444\u043e\u0440\u043c\u0443","First click a text field to insert your tokens into.":"\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043a\u043b\u0438\u043a\u043d\u0438\u0442\u0435 \u0432 \u0442\u0435\u043a\u0441\u0442\u043e\u0432\u043e\u0435 \u043f\u043e\u043b\u0435, \u0447\u0442\u043e\u0431\u044b \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u044c\u0442\u043e\u043a\u0435\u043d\u044b.","Automatic alias":"\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u0441\u0438\u043d\u043e\u043d\u0438\u043c","One domain with multiple subdomains":"\u041e\u0434\u0438\u043d \u0434\u043e\u043c\u0435\u043d \u0441 \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u043c\u0438 \u0441\u0443\u0431\u0434\u043e\u043c\u0435\u043d\u0430\u043c\u0438","Multiple top-level domains":"\u041d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0434\u043e\u043c\u0435\u043d\u043e\u0432 \u0432\u0435\u0440\u0445\u043d\u0435\u0433\u043e \u0443\u0440\u043e\u0432\u043d\u044f","Universal web tracking opt-out":"\u0423\u043d\u0438\u0432\u0435\u0440\u0441\u0430\u043b\u044c\u043d\u044b\u0439 \u043e\u0442\u043a\u0430\u0437 \u043e\u0442 \u0432\u0435\u0431-\u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u043d\u0438\u044f","All pages with exceptions":"\u0412\u0441\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u0441 \u0438\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f\u043c\u0438","Excepted: @roles":"\u0418\u0441\u043a\u043b\u044e\u0447\u0435\u043d\u044b: @roles","On by default with opt out":"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u043e, \u0441 \u043e\u0442\u043a\u0430\u0437\u043e\u043c","Off by default with opt in":"\u041f\u043e \u0443\u043c\u043e\u043b\u0447\u0430\u043d\u0438\u044e \u0432\u044b\u043a\u043b\u044e\u0447\u0435\u043d\u043e, \u0441 \u0441\u043e\u0433\u043b\u0430\u0441\u0438\u0435\u043c","Downloads":"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0438","Not tracked":"\u041d\u0435 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442\u0441\u044f","@items enabled":"@items \u0432\u043a\u043b\u044e\u0447\u0435\u043d\u044b","A single domain":"\u041e\u0434\u0438\u043d \u0434\u043e\u043c\u0435\u043d","No privacy":"\u041d\u0435\u0442 \u043a\u043e\u043d\u0444\u0438\u0434\u0435\u043d\u0446\u0438\u0430\u043b\u044c\u043d\u043e\u0441\u0442\u0438","Also allow !name role to !permission?":"\u0422\u0430\u043a\u0436\u0435 \u043f\u0440\u0438\u0441\u0432\u043e\u0438\u0442\u044c \u0440\u043e\u043b\u0438 !name \u043f\u0440\u0430\u0432\u0430 !permission?","Close":"\u0417\u0430\u043a\u0440\u044b\u0442\u044c","Log messages":"\u0421\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f \u0432 \u043b\u043e\u0433","Please select a file.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0432\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0444\u0430\u0439\u043b.","You are not allowed to operate on more than %num files.":"\u0412\u0430\u043c \u043d\u0435 \u0440\u0430\u0437\u0440\u0435\u0448\u0435\u043d\u043e \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0442\u044c \u0431\u043e\u043b\u044c\u0448\u0435 \u0447\u0435\u043c \u0441 %num \u0444\u0430\u0439\u043b\u0430\u043c\u0438.","Please specify dimensions within the allowed range that is from 1x1 to @dimensions.":"\u041f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430 \u0443\u043a\u0430\u0436\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u0432\u043d\u0443\u0442\u0440\u0438 \u0440\u0430\u0437\u0440\u0435\u0448\u0451\u043d\u043d\u043e\u0433\u043e \u0434\u0438\u0430\u043f\u043e\u0437\u043e\u043d\u0430 \u043e\u0442 1x1 \u0434\u043e @dimensions.","%filename is not an image.":"\u0424\u0430\u0439\u043b %filename \u043d\u0435 \u044f\u0432\u043b\u044f\u0435\u0442\u0441\u044f \u0438\u0437\u043e\u0431\u0440\u0430\u0436\u0435\u043d\u0438\u0435\u043c.","Do you want to refresh the current directory?":"\u0412\u044b \u0445\u043e\u0442\u0438\u0442\u0435 \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u0443\u044e \u043f\u0430\u043f\u043a\u0443?","Delete selected files?":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u044b\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0444\u0430\u0439\u043b\u044b?","Please select a thumbnail.":"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0438\u043d\u0438\u0430\u0442\u044e\u0440\u0443.","You must select at least %num files.":"\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0432\u044b\u0431\u0440\u0430\u0442\u044c \u043d\u0435 \u043c\u0435\u043d\u0435\u0435 %num \u0444\u0430\u0439\u043b\u043e\u0432.","You can not perform this operation.":"\u0412\u044b \u043d\u0435 \u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u044d\u0442\u0443 \u043e\u043f\u0435\u0440\u0430\u0446\u0438\u044e.","Insert file":"\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0444\u0430\u0439\u043b","Change view":"\u0421\u043c\u0435\u043d\u0438\u0442\u044c \u0432\u0438\u0434","@count year from now":"@count \u0433\u043e\u0434 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430","@count years from now":"@count \u0433\u043e\u0434\u0430 \u043e\u0442 \u0442\u0435\u043a\u0443\u0449\u0435\u0433\u043e \u043c\u043e\u043c\u0435\u043d\u0442\u0430"}} };