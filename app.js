$(document).ready(function (){
    var search = ''
    var beginDate = ''
    var endDate = ''
    // $(".endDate").val('' +1231)
    var artNum = ''
    // var showArticle = $(".records").val()

        $("#runSearch").on("click", function(){
            search = $(".search").val()
            beginDate = $(".beginDate").val() + '0101'
            endDate = $(".endDate").val() + '1231'

            console.log(search)
            console.log(beginDate)
            console.log(endDate)
            event.preventDefault()
            var api = '8ff951779ef8421f8c330c0515c2942a'
            var queryURL =  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api_key=' + api + '&q=' + search + '&begin_date=' + beginDate + '&end_date=' + endDate
    
            $.ajax({
                url : queryURL,
                method : 'GET'
            }).done(function(result) {
                var objData = result.response.docs
                for(var i = 0; i < objData.length; i++){
                    //gets articles
                    // $(".result").append(objData[i].web_url)
                    // $(".result").append(objData[i].headline.main)
                    // $(".result").append(objData[i].byline.original)
                    var articleName = $("<a class='link' href='" + objData[i].web_url + "'><h1 class='title'>" + objData[i].headline.main + "</h1></a>")
                    var articleAuthor = $("<p class='author'>" + objData[i].byline.original + "</p>")
                    $(".result").append(articleName)
                    articleName.append(articleAuthor)
                    event.preventDefault()
                }
                

            })
            console.log(objData) //grabs articles 1-10
            console.log(result) 
            console.log(queryURL) 
        })

        $("#clearAll").on("click", function(){
            $("input").val(' ')
            console.log('clear')
            event.preventDefault()
        })
        
    })
    
    //get author name
//title of the article
//url to article