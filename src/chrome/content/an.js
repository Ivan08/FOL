// bad

var links	=	{};

function load()
{
	for (var i = 0 ; i < window.arguments[0].length; i++){
		links[window.arguments[0][i].href] = window.arguments[0][i].text
	}
	create_tree();
	document.getElementById("count").value	=	'Total link: ' + Object.keys(links).length;
};

function open_tab()
{
	var tree		=	document.getElementById("linksTree");
	var start		=	new Object();
	var end			=	new Object();
	var numRanges	=	tree.view.selection.getRangeCount();
	var column		=	tree.columns.getNamedColumn("url");
	for (var t = 0; t < numRanges; t++){
		tree.view.selection.getRangeAt(t,start,end);
		for (var v = start.value; v <= end.value; v++){
			window.arguments[1].open(tree.view.getCellText(v,column), "_blank");
		}
	}
	window.close();
};

function clear_tree()
{
	var tree	=	document.getElementById("my_tree_children");
	var treeChildren;
	while(treeChildren = document.getElementById("content")){
		tree.removeChild(treeChildren);
	}
	document.getElementById("count").value ='Total link: 0' ;
	document.getElementById("count_select").value = 'Count link: 0';
};

function count_select()
{	
	var tree		=	document.getElementById("linksTree");
	var numRanges	=	tree.view.selection.getRangeCount();
	document.getElementById("count_select").value = 'Count link: ' + numRanges;
};

function filter()
{
	var filter	=	document.getElementById("filter_text").value;
	var re		=	new RegExp(filter);
	var count	=	0;
	clear_tree();
	for (var i in links){
		if(re.test(links[i]) || re.test(i)){
			add_element(links[i],i);
			count++;
		}
	}
	document.getElementById("count").value ='Total link: ' + count;
};

function create_tree()
{
	for (var i in links)
	{
		add_element(links[i],i);
	}
};

function add_element(id,content)
{
	var treeChildren	=	document.getElementById("my_tree_children");
	var treeitem		=	document.createElement('treeitem');
	var treerow			=	document.createElement('treerow');
	var treecell_1		=	document.createElement('treecell');
	var treecell_2		=	document.createElement('treecell');
	treeitem.setAttribute('id','content')
	treecell_1.setAttribute('label', id);
	treecell_2.setAttribute('label', content);
	treerow.appendChild(treecell_1);
	treerow.appendChild(treecell_2);
	treeitem.appendChild(treerow);
	treeChildren.appendChild(treeitem);
};