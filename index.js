$(document).ready(function(){
  $('#search').on('click', function(){
    getJSON()
    console.log("hey there")
  });
});

function getJSON(){
  const hero = $('#searchCharacter').val()
  const url = `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${hero}&ts=1&apikey=04af7fd8b74cc2dcab3a31409c242c68&hash=9655377f666245e12273bdaa8d8a482e`
  $.ajax({
    url: url,
    method: 'GET',
    success: function(details){
      showHeroDetails(details);
      // hello(details);
    }
  })
}

function showHeroDetails(details){
  $('.row').html("")
  var characterDetails = details.data.results.map(function(character){
    $('.row').append(`<div class="col-md-6"><img src="${character.thumbnail.path}/detail.${character.thumbnail.extension}"></div>`);
    $('.row').append(`<div class="col-md-6"><h1>${character.name}</h1><br><h3>${character.description}</h3></div>`)
  })

  // return $('.col-md-4').append(`<img src="${characterDetails}">`)
}

// function hello(details){
//   var characterDetails = details.data.results.map(function(character){
//     debugger
//     return $('.nameDisplay').append(`<h1>${character.name}</h1>`)
//   })
// }
