$(document).ready(function(){
    hideAllDescriptions();
    showingText('#java', '.javatext');
    showingText('#js', '.jstext');
    showingText('#csharp', '.csharptext');
})

function hideAllDescriptions(){
    $('.javatext').hide();
    $('.jstext').hide();
    $('.csharptext').hide();
}
    //εναλλακτικά
  /*   let imgTexts = $('div[class*="text"]');
    imgTexts.each(function(){
        $(this).hide();
    }) */


function showingText(imgId, textDiv){
    $(textDiv).prepend('<h1></h1');
    $(textDiv + '> h1').addClass('mb-20');
    $(textDiv + '> h1').text(imgId);

    $(imgId).hover(function(){
        $(this).css({'box-shadow': "0 0 5px grey"})
        $(textDiv).show();
    }, function(){
        $(this).css({'box-shadow': "none"});
        $(textDiv).hide();
    })
}
