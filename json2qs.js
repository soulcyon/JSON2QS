/**
 * @author     Sashank Tadepalli <dijjit@gmail.com>
 * @license    Creative Commons Attribution 3.0 Unported License.
 * @version    1.0
 * @link       http://dijjit.com/js/arbitrary-json-to-php-querystring/
 */
Object.prototype.toQS = function(inner){
  var build = "",
      _this = this;
  for( t in this ){
    if( !this.hasOwnProperty(t) ) continue;
    var temp = (inner ? inner + "[" + (!(this instanceof Array) ? t : "") + "]" : t);
    build += "&" + (typeof this[t] == "object" ? this[t].toQS(temp) : temp + "=" + this[t]);
  }
  return build.substring(1);
}
