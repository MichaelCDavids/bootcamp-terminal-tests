module.exports = function(year){
	var currentYear = new Date();
  	currentYear = currentYear.getFullYear();
  	var howManyYearsAgo = currentYear - year;
  	return howManyYearsAgo;
}
