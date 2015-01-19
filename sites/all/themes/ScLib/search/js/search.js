function dosearch() {
		var sf=document.searchform;
		var submitto = encodeURI(sf.elements["cd-dropdown"].value + sf.searchterms.value);
		if (sf.elements["cd-dropdown"].value == '/search/node/') {
		window.location.href = submitto;}
			else{
				if (sf.elements["cd-dropdown"].value != 'http://elcat.bntu.by/?field1=Заглавие&term1=' && sf.elements["cd-dropdown"].value != 'http://rep.bntu.by/discover?query=' && sf.elements["cd-dropdown"].value != 'http://rep.bntu.by/discover?query=') {
					var submitto = encodeURI("/search/node/" + sf.searchterms.value);
					window.open(submitto);
				}
				else
					window.open(submitto);
				}
	return false;
}
