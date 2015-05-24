if ( !this.message ) {
  error('message', "tell what make you happy");
}

if (this.level < 1 || this.level > 5) {
  error('level', "values between 1 and 5");
}

if( this.latlng )
{
	var isFloat = function(n){
        return n === Number(n) && n%1 !== 0;
	};
	if ( !this.latlng.lat || !this.latlng.lng ) {
        error('latlong', "Latlong must have lat and long properties");
	}
	if ( !this.latlng.lat || !isFloat(this.latlng.lat) ) {
        error('latlong', "Latlong.lat must be a number");
	}
	if ( !this.latlng.lng || !isFloat(this.latlng.lng) ) {
        error('latlong', "Latlong.long must be a number");
	}
}