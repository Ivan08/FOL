var fast_open_link = {
  onLoad: function() {
    // initialization code
    this.initialized = true;
    this.strings = document.getElementById("fast_open_link-strings");
    //this.text = window.content.document.getElementsByTagName('a')[1];

  },

  onMenuItemCommand: function(e) {
    var promptService = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                                  .getService(Components.interfaces.nsIPromptService);
   // promptService.alert(window, this.strings.getString("helloMessageTitle"),this.strings.getString("helloMessage"));
	//glob = window.content.document.getElementsByTagName('a');
//	alert(links.length);
//	alert(this.text);
//	alert(this.text.length);
	window.openDialog('chrome://fast_open_link/content/another.xul', '_blank','chrome,all,dialog=yes,width=1000,height=500,scrollbars=yes',window.content.document.getElementsByTagName('a'),window.content);
  },

  onToolbarButtonCommand: function(e) {
    // just reuse the function above.  you can change this, obviously!
    fast_open_link.onMenuItemCommand(e);
  }
};

window.addEventListener("load", function () { fast_open_link.onLoad(); }, false);


fast_open_link.onFirefoxLoad = function(event) {
  document.getElementById("contentAreaContextMenu")
          .addEventListener("popupshowing", function (e) {
    fast_open_link.showFirefoxContextMenu(e);
  }, false);
};

fast_open_link.showFirefoxContextMenu = function(event) {
  // show or hide the menuitem based on what the context menu is on
  document.getElementById("context-fast_open_link").hidden = gContextMenu.onImage;
};

window.addEventListener("load", function () { fast_open_link.onFirefoxLoad(); }, false);
