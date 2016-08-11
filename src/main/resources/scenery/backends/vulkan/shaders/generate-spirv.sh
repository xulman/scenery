LS_CMD="ls *.{vert,geom,tese,tesc,frag,comp} 2>/dev/null"
POST_CMD="grep --color -i ERROR"

while getopts ":v" opt; do
	case $opt in
		v)
		echo "Verbose mode activated"
		LS_CMD="$LS_CMD 2>/dev/null"
		POST_CMD="cat"
		;;
	esac
done

files=`eval "$LS_CMD"`
for i in $files; do
	echo "# $i GLSL -> SPIR-V"
	glslangValidator -V $i -o $i.spv | $POST_CMD
	echo "# done"
done;
