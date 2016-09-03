Object.prototype.diff = function(second) {
  /**
   * Method for substraction argument object from this object
   */
  
  const d = {};
  for (let key in this) if (this.hasOwnProperty(key)) {

      if (second.hasOwnProperty(key)) {
        if (this[key] !== second[key]) {
	  if (
	    typeof this[key] === 'object' && this[key] !== null &&
	    typeof second[key] === 'object' && second[key] !== null
	  ) {
	    const res = this[key].diff(second[key]);
  	    if (JSON.stringify(res) !== "{}") d[key] = res;
	  } else {
	    d[key] = this[key];
	  }
	}
      } else {
	d[key] = this[key];
      }

  }
  
  return d; 
}

Object.prototype.deep = function(indent = '') {
  for (key in this) if (this.hasOwnProperty(key)) {
    console.log(indent + key + ': ' + this[key]);
    if (typeof this[key] === 'object' && this[key] !== null) {
      this[key].deep(indent + '  ');
    } else {
      // nop
    }
  }
}

