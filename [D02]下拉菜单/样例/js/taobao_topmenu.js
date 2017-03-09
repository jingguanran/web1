var i, len,
	uls = document.getElementsByTagName( "ul" );

for( i = 0, len = uls.length; i < len; i++ ){
	if( uls[ i ].getElementsByTagName( "li" )[ 0 ].className != "hd nohover hd-noborder"){
		uls[ i ].onmouseover = function(){
			var lis = this.getElementsByTagName( "li" );
			lis[ 0 ].className = "hd clearfix";
			lis[ 1 ].className = "bd show";
			lis[ 0 ].getElementsByTagName( "b" )[0].className = "up3j";
		};
		uls[ i ].onmouseout = function(){
			var lis = this.getElementsByTagName( "li" );
			lis[ 0 ].className = "hd nohover clearfix";
			lis[ 1 ].className = "bd";
			lis[ 0 ].getElementsByTagName( "b" )[0].className = "";
		};
	}
}