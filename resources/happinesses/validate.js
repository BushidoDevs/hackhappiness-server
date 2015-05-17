if (this.level < 1 || this.level > 5) {
  error('level', "values between 1 and 5");
}

function isFloat(n){
    return n === Number(n) && n%1 !== 0
}
if ( !this.latlong.lat || !this.latlong.long ) {
  error('latlong', "Latlong must have lat and long properties");
}
if ( !this.latlong.lat || !isFloat(this.latlong.lat) ) {
  error('latlong', "Latlong.lat must be a number");
}
if ( !this.latlong.long || !isFloat(this.latlong.long) ) {
  error('latlong', "Latlong.long must be a number");
}