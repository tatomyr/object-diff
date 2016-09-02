Object.prototype.diff = function(second) {
  /**
   * Method for substraction second object from this object
   */
  
  const d = {};
  for (let key in this) {
    if (this.hasOwnProperty(key)) {

      if (second.hasOwnProperty(key)) {
        if (this[key] !== second[key]) {
	  if (
	    typeof this[key] === 'object' && 
	    this[key] !== null &&
	    typeof second[key] === 'object' &&
	    second[key] !== null
	  ) {
	    d[key] = this[key].diff(second[key]);
	  } else {
	    d[key] = this[key];
	  }
	}
      } else {
	d[key] = this[key];
      }

    }
  }
  
  return d; 
}


