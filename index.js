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
    success: showHeroDetails
      // hello(details);
    })
}





function showHeroDetails(details){
  $('.1').html("")
  var characterDetails = details.data.results.map(function(character){
    $('.1').append(`<div class="col-md-6 mts"><img src="${character.thumbnail.path}/detail.${character.thumbnail.extension}" class="imageResults"></div><br/>`);
    $('.1').append(`<div class="col-md-6 mtxl"><h1>${character.name}</h1><br><p>${character.description}</p><a href="${character.urls[1].url} target="_blank">MoreInfo</a></div>`)
  })
  $('#button').on('click', function(){
      console.log(this.parentNode)
    })

}
