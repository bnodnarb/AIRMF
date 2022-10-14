  function myalert()
  {
   alert("Hello from searching.js");
   document.write("Welcome to Javatpoint!");

         }


  function displaySearchResults(results, searchTerm, store) {
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
