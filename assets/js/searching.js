  function getPreview(query, content, previewLength) {
                previewLength = previewLength || (content.length * 2);

                var parts = query.split(" "),
                        match = content.toLowerCase().indexOf(query.toLowerCase()),
                        matchLength = query.length,
                        preview;

                // Find a relevant location in content
                for (var i = 0; i < parts.length; i++) {
                        if (match >= 0) {
                                break;
                        }

                        match = content.toLowerCase().indexOf(parts[i].toLowerCase());
                        matchLength = parts[i].length;
                }

                // Create preview
                if (match >= 0) {
                        var start = match - (previewLength / 2),
                                end = start > 0 ? match + matchLength + (previewLength / 2) : previewLength;

                        preview = content.substring(start, end).trim();

                        if (start > 0) {
                                preview = "..." + preview;
                        }

                        if (end < content.length) {
                                preview = preview + "...";
                        }

                        // Highlight query parts
                        preview = preview.replace(new RegExp("(" + parts.join("|") + ")", "gi"), "<strong>$1</strong>");
                } else {
                        // Use start of content if no match found
                        preview = content.substring(0, previewLength).trim() + (content.length > previewLength ? "..." : "");
                }

                return preview;
        }



  function displaySearchResults(results, searchTerm, store) {
    var searchResults = document.getElementById('search-results');
    
    if (results.length) { // Are there any results?
      var appendString = "Showing results for ''<b>" + searchTerm + "</b>'':";
      appendString += '<br>'

      //appendString = appendString + results.length;
      fuzzyString = '';

      for (var i = 0; i < results.length; i++) {  // Iterate over the results

        var item = store[results[i].ref];

        contentPreview = getPreview(searchTerm, item.content.substring(10, item.content.length), 460),
        titlePreview = getPreview(searchTerm, item.title);

	match = getMatch(searchTerm, item.content.substring(10, item.content.length)); 
        if (match >= 0) {        
        	appendString += "<li><h6><a href='" + item.url.trim() + "'>" + titlePreview + "</a></h6><p><small>" + contentPreview + "</small></p></li>";
	} else {
               fuzzyString += "<li><h6><a href='" + item.url.trim() + "'>" + titlePreview + "</a></h6><p><small>" + contentPreview + "</small></p></li>";
        }
      }  //for

      searchResults.innerHTML = appendString + fuzzyString;
    } else {
      searchResults.innerHTML = '<li>No results found!</li>';
    }
  }

  //get match location;
  function getMatch(query, content) {

                var parts = query.split(" "),
                        match = content.toLowerCase().indexOf(query.toLowerCase()),
                        matchLength = query.length,
                        preview;

                // Find a relevant location in content
                for (var i = 0; i < parts.length; i++) {
                        if (match >= 0) {
                                break;
                        }

                        match = content.toLowerCase().indexOf(parts[i].toLowerCase());
                        matchLength = parts[i].length;
                }
                return match;
        }

  //display results only with description section;
  function displayResults(results, searchTerm, store) {
    var searchResults = document.getElementById('search-results');

    if (results.length) { // Are there any results?
      var appendString = "Showing results for '<b>" + searchTerm + "</b>':";
      appendString += '<br>'

      for (var i = 0; i < results.length; i++) {  // Iterate over the results
        var item = store[results[i].ref];
        appendString += '<li><a href="' + item.url + '"><h6>' + item.title + '</h6></a>';
        if (item.description.length > 150) {
        appendString += '<p>' + item.description.substring(0, 190) + '...</p></li>';
        } else {
        appendString += '<p>' + item.description + '</p></li>';
        }
        //appendString += '<p>' + item.content.substring(0, 150) + '...</p></li>';
      }

      searchResults.innerHTML = appendString;
    } else {
      searchResults.innerHTML = '<li>No results found!</li>';
    }
  }


  function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split('&');
    //window.alert(query);
    for (var i = 0; i < vars.length; i++) {
      var pair = vars[i].split('=');

      if (pair[0] === variable) {
        return decodeURIComponent(pair[1].replace(/\+/g, '%20'));
      }
    }
  }

  //window.alert("Hello outside any functions");
  var searchTerm = getQueryVariable('query');
  if (searchTerm) {
  	//window.alert(searchTerm);
        document.getElementById('search-box').setAttribute("value", searchTerm);
   
        // Initalize lunr with the fields it will be searching on. I've given title
        // a boost of 10 to indicate matches on this field are more important.
        var idx = lunr(function () {
        this.field('id');
        this.field('title', { boost: 10 });
        this.field('author');
        this.field('category');
        this.field('content');
        
        // Add data to lunr
        for (var key in window.store) {
          this.add({
            'id': key,
            'title': window.store[key].title,
            'author': window.store[key].author,
            'category': window.store[key].category,
            'content': window.store[key].content
          });
        }
      });
     
      //window.alert("Start searching...")
      var results = idx.search(searchTerm); // Get lunr to perform a search
      //document.write(searchTerm);
      displaySearchResults(results, searchTerm, window.store); // We'll write this in the next section
 

  }
