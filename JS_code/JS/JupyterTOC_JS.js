/* Jupyter lab version*/
var my_i,my_id,my_htmlText='';
// var tocJson={};
for (my_i of document.getElementsByClassName("lm-Widget p-Widget jp-MainAreaWidget jp-NotebookPanel jp-Document jp-Activity lm-DockPanel-widget p-DockPanel-widget jp-mod-searchable")[0].getElementsByClassName("lm-Widget p-Widget jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput")){
	// tocJson["ele"+my_id]={}
	// tocJson["ele"+my_id].htmlId = my_i.children[0].id
	// tocJson["ele"+my_id].text = my_i.children[0].innerText
	// tocJson["ele"+my_id].tagName = my_i.children[0].tagName
	// my_id += 1
	my_tag='h'+(parseInt(my_i.children[0].tagName[1])+1);
	my_htmlText += "<div><"+my_tag+"><a href=#"+my_i.children[0].id+">"+my_i.children[0].innerText+"</a></"+my_tag+"></div>"
	// console.log(htmlText)
	// console.log("  ")
}

var toc = document.getElementsByClassName("lm-Widget p-Widget jp-extensionmanager-view lm-StackedPanel-child p-StackedPanel-child")[0]
toc.innerHTML=my_htmlText;
toc.style.overflow='auto';
//one line
var my_i,my_id,my_htmlText='';for(my_i of document.getElementsByClassName("lm-Widget p-Widget jp-MainAreaWidget jp-NotebookPanel jp-Document jp-Activity lm-DockPanel-widget p-DockPanel-widget jp-mod-searchable")[0].getElementsByClassName("lm-Widget p-Widget jp-RenderedHTMLCommon jp-RenderedMarkdown jp-MarkdownOutput")){my_tag='h'+(parseInt(my_i.children[0].tagName[1])+1);my_htmlText += "<div><"+my_tag+"><a href=#"+my_i.children[0].id+">"+my_i.children[0].innerText+"</a></"+my_tag+"></div>";}document.getElementsByClassName("lm-Widget p-Widget jp-extensionmanager-view lm-StackedPanel-child p-StackedPanel-child")[0].innerHTML=my_htmlText;void(0);

/* ################################# Notebook version #####################################*/
var my_i,my_htmlText='';
for(my_i of document.getElementsByClassName("text_cell_render rendered_html")){
	my_tag='h'+(parseInt(my_i.children[0].tagName[1])+3);
	my_htmlText += "<"+my_tag+"><p><a href=#"+my_i.children[0].id+">"+my_i.children[0].innerText+"</a></p></"+my_tag+">";
}
var tocDiv = document.createElement("div");
tocDiv.innerHTML=my_htmlText;
tocDiv.id='tocDiv'; 
tocDiv.style.position='fixed';
tocDiv.style.marginTop='-40%';
tocDiv.style.overflow='auto';
tocDiv.style.width='12%';
tocDiv.style.textAlign='right';
if(document.body.contains(document.getElementById('tocDiv'))){document.body.removeChild(document.getElementById('tocDiv'));}
document.body.appendChild(tocDiv);
document.getElementById('notebook-container').style.setProperty("width", "1140px", "important");

//One line
var my_i,my_htmlText='';for(my_i of document.getElementsByClassName("text_cell_render rendered_html")){my_tag='h'+(parseInt(my_i.children[0].tagName[1])+3);my_htmlText += "<"+my_tag+"><p><a href=#"+my_i.children[0].id+">"+my_i.children[0].innerText+"</a></p></"+my_tag+">";}var tocDiv = document.createElement("div");tocDiv.innerHTML=my_htmlText;tocDiv.id='tocDiv';tocDiv.style.position='fixed';tocDiv.style.marginTop='-40%';tocDiv.style.overflow='auto';tocDiv.style.width='12%';tocDiv.style.textAlign='right';if(document.body.contains(document.getElementById('tocDiv'))){document.body.removeChild(document.getElementById('tocDiv'));}document.body.appendChild(tocDiv);document.getElementById('notebook-container').style.setProperty("width", "1140px", "important");void(0);