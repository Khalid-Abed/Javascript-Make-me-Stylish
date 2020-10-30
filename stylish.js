function stylish(tag,object)
{
    //var object={};
    var tag=document.getElementsByTagName(tag);
    for(var i=0;i<tag.length;i++)
    {
        for (var key in object)
        {
            tag[i].style[key]=object[key];
          
        }
        
    }
}
