<?php
$z[0]=Array("field","",131,150);
$z[0][4]['name']="title";
$z[1]=Array("global","",151,177);
$z[1][4]['name']="cfg_webname";
$z[2]=Array("field","",218,247);
$z[2][4]['name']="keywords";
$z[3]=Array("field","",287,345);
$z[3][4]['name']="description";
$z[3][4]['function']="html2text(@me)";
$z[4]=Array("include","",737,772);
$z[4][4]['filename']="head.htm";
$z[5]=Array("channel","\r\n    <li><a href='[field:typeurl/]'>[field:typename/]</a></li>\r\n    ",912,1129);
$z[5][4]['type']="son";
$z[5][4]['currentstyle']="<li id='left_current'><a href='~typelink~' class='thisclass'>~typename~</a></li>";
$z[6]=Array("list","\r\n      <li> <a href=\"[field:arcurl/]\" target=\"_blank\"><img src=\"[field:picname/]\"></a> <span><a href=\"[field:arcurl/]\" target=\"_blank\">[field:title/]</a><font></font></span>\r\n        <div></div>\r\n        <p>[field:description function='cn_substr(@me,80)'/]...</p>\r\n      </li>\r\n      ",1396,1717);
$z[6][4]['pagesize']="4";
$z[7]=Array("pagelist","",1820,1873);
$z[7][4]['listitem']="index,end,pre,next,pageno";
$z[8]=Array("include","",2037,2074);
$z[8][4]['filename']="footer.htm";

?>