// 5个炸鸡中有全部4种炸鸡的概率
var data_pro = []
for(var i=0;i<5000;i++){
	data_pro.push(1)
	data_pro.push(2)
	data_pro.push(3)
	data_pro.push(4)
}
allPos = []
sucPos = []
function testSuc(){
	var suc = 0, total = 100000
	for(var t=0;t<total;t++){
		var data = [...data_pro]
		var sample = []
		for(var i=0;i<5;i++){
			var rand = Math.floor(Math.random() * data.length)
			// 放回 23.38% 不稳定
			// sample.push(data[rand])
			// 不放回抽样 23.388%
			sample.push(data.splice(rand,1)[0])
			
			// if(data[rand]!=''){
				// sample.push(data[rand])
				// data[rand]=''
			// }else{
				// console.log(-1)
				// i-=1
			// }
		}
		code = sample.sort().join('')
		if(!allPos.includes(code)){
			allPos.push(code)
		}
		if(sample.includes(1)&&sample.includes(2)&&sample.includes(3)&&sample.includes(4)){
			suc += 1
			if(!sucPos.includes(code)){
				sucPos.push(code)
			}
		}
	}
	return suc/total
}
testSuc()
3^3 = 27
111 222 333 112 113 221 223 331 332	123
			121	131	212 232	313	323	132
			211	311	122	322	133	233	213
									231
									312
									321
									
//数组去重复
function unique(array) {
    // res用来存储结果
    var res = [];
    for (var i = 0, arrayLen = array.length; i < arrayLen; i++) {
        for (var j = 0, resLen = res.length; j < resLen; j++ ) {
            if (array[i] === res[j]) {
                break;
            }
        }
        // 如果array[i]是唯一的，那么执行完循环，j等于resLen
        if (j === resLen) {
            res.push(array[i])
        }
    }
    return res;
}
