$(document).ready(function()
{
  $("h1.title2").each(function()
  {
    if ($(this).is(":empty"))
    {
      $(this).closest("div").children("h1.title").css("line-height","35px");
    }
  });
  
});
