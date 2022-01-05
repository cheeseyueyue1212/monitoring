function npmDemo(argument) {
	var name = 'finit';
	var f2 =function f(arg){console.log(arg)}
	return {
		name:name,
		f2:f2
	}
}
module.exports=npmDemo();

