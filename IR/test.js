//Calculate various relevance measures automatically
	function calc(){
		/* Calculate Average Precision */
		precision = 0
		res_key = Object.keys(res).sort(function(a,b){return res[a].rid-res[b].rid})
		for(var c=0;c<res_key.length;c++){
			precision += ((c+1) / res[res_key[c]].rid) /res_key.length;
		}
		console.log("Average Precision: "+precision);
		/* Calculate Precision @ resLimit */
		precisionAT = res_key.length / resLimit;
		/* Calculate Reciprocal Rank */
		reciprocal = 0;
		if(res_key.length>0){
			reciprocal = 1 / res[res_key[0]].rid
		}
		console.log("Reciprocal Rank: "+reciprocal);
		/* Calculate Discounted Cumulative Gain */
		DCG = (res_key.length>0 && res[res_key[0]].rate!= undefined) ? parseInt(res[res_key[0]].rate):0;
		rateVal = (res[res_key[0]]!=undefined && res[res_key[0]].rate!= undefined) ? [res[res_key[0]].rate]:[0]
		for(var c=1;c<res_key.length;c++){
			if(res[res_key[c]].rate != undefined){
				DCG += parseInt(res[res_key[c]].rate) / (Math.log(res[res_key[c]].rid)/Math.log(2))
			}
			if(res[res_key[c]].rate!= undefined){
				rateVal.push(res[res_key[c]].rate)
			}else{
				rateVal.push(0)
			}
		}
		console.log("Discounted Cumulative Gain: "+DCG );
		/* Calculate Ideal Discounted Cumulative Gain */
		rateVal = rateVal.sort().reverse()
		IDCG = (rateVal.length>0) ? parseInt(rateVal[0]):0
		for(var c=1;c<rateVal.length;c++){
			IDCG += parseInt(rateVal[c]) / (Math.log(c+1)/Math.log(2))
		}
		/* Calculate Normalized Discounted Cumulative Gain */
		NDCG = DCG==0 ? 0:DCG/IDCG
		console.log("NDCG: "+NDCG);
		showRes.innerHTML = "<h2>Precision@"+resLimit.toFixed(3)+": "+precisionAT+"</h2><h2>Average Precision: "
		+precision.toFixed(3)+"</h2><h2>Reciprocal Rank: "+reciprocal.toFixed(3)+"<h2>Discounted Cumulative Gain: "
		+DCG.toFixed(3)+"</h2><h2>IDCG: "+IDCG.toFixed(3)+"</h2><h2>NDCG: "+NDCG.toFixed(3)+"</h2>";
	}
//Results display 
	function createResDis(){
		showRes = document.createElement("div")
		showRes.style.height = '200px';
		showRes.style.width = '200px';
		showRes.style.position = 'fixed';
		showRes.style.background = "rgba(216,170,170,0.5)";
		showRes.style.zIndex = 9999
		showRes.style.margin = '-220px 0 0 66%';
		showRes.style.color = 'blue';
		showRes.style.cursor = 'pointer';
		showRes.title = 'Click to Refresh';
		// When user click the results display, clear all the created buttons and range bar, click again to rebuild new test
		showRes.onclick = function(){ 
			var elen = document.getElementsByClassName('mybtnrel').length
			for(var index=0;index<elen;e++){ 
				var e = document.getElementsByClassName('mybtnrel')
				var e1 = document.getElementsByClassName('myrate')
					if(e[index]!=undefined&&e[index].parentElement!=undefined){
						e[index].parentNode.style.background='#fff';e[index].parentElement.removeChild(e[index])
					}
					if(e1[index]!=undefined&&e1[index].parentElement!=undefined)e1[index].parentElement.removeChild(e1[index])
			}
			this.parentElement.removeChild(this)
			analyseRes()
		}
		return showRes;
	}
	function createRelBtn(i){
//Add buttons for relevant judgement
		btn_rel= document.createElement("button");
		btn_rel.innerText = 'Not Relevant';
		btn_rel.style.position = 'absolute'
		btn_rel.style.margin = '-120px 0 0 68%';
		btn_rel.style.height = '80px';
		btn_rel.style.width = '120px';
		btn_rel.style.cursor = 'pointer';
		btn_rel.id = "btn_rel"+i;
		btn_rel.rid = i;
		btn_rel.className = 'mybtnrel';
		btn_rel.onclick = function(){ //Add or remove "Relevant" status to each result
			if(this.parentNode.style.background=='green'){
				this.parentNode.style.background='#fff';
				this.innerText = 'Not Relevant'
				document.getElementById('rate'+this.rid).value = 0
				document.getElementById('rate'+this.rid).disabled = true
				delete res[this.id];
			}else{
				this.parentNode.style.background='green';
				this.innerText = 'Relevant: 1' 
				document.getElementById('rate'+this.rid).value = 1
				document.getElementById('rate'+this.rid).disabled = false
				res[this.id] = { //store relevant results
					'rid': this.rid+1,
					'relevant':true,
					'rate':1,
				}
			}
			calc()
		}
		return btn_rel;		
	}
//Add range bar to input its relevance score
	function createRateRange(i){
		rate = document.createElement("input");
		rate.type = 'range'
		rate.min = 0  //Graded Relevance Score from 0
		rate.max = 2  //To 2
		rate.value = 0 //default 1
		rate.style.marginLeft = "70%"
		rate.disabled = true
		rate.rid = i
		rate.id = 'rate'+i
		rate.className = 'myrate'
		rate.oninput= function(){ //when user input relevance score
			if(this.value==0){
				document.getElementById('btn_rel'+this.rid).click()
			}else{
				document.getElementById('btn_rel'+this.rid).innerText = "Relevant: "+this.value
				res["btn_rel"+this.rid]["rate"] = this.value
			}
			calc()
		}
		return rate;
	}
/* get YouTube results list and analyse relevance*/
	function analyseRes(){
		list = document.getElementsByTagName("ytd-video-renderer") //YouTube video result tag name
		list[0].appendChild(createResDis()) //Create a div to show results
		res = []; // Use to store relevant result
		//By default analyze all results in current page unless user set a limit value
		resLimit = resLimit != undefined ? resLimit > list.length ? list.length : resLimit : list.length 
		for(var i=0;i<resLimit;i++){ //for each results
			list[i].appendChild(createRelBtn(i)); // create a relevant-decision button
			list[i].appendChild(createRateRange(i)); //create a relevance score range input
		}
	}
(function(){
	resLimit = 10 //gather 20 documents
	analyseRes()
})();
function testlist(){
	reslist=[]
	for(var i=0;i<10;i++){
		if(res['btn_rel'+i]!=undefined){
			reslist.push(res['btn_rel'+i].rate)
		}else{
			reslist.push(0)
		}
	}
	console.log(reslist)
}