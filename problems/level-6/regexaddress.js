// Implement String#ipv4_address?, which should return true if given object is an IPv4 address - four numbers (0-255) separated by dots.
//
// It should only accept addresses in canonical representation, so no leading 0s, spaces etc.


//
// Test.describe("Basic tests",_=>{
// Test.assertEquals("".ipv4Address(), false);
// Test.assertEquals("127.0.0.1".ipv4Address(), true);
// Test.assertEquals("0.0.0.0".ipv4Address(), true);
// Test.assertEquals("255.255.255.255".ipv4Address(), true);
// Test.assertEquals("10.20.30.40".ipv4Address(), true);
// Test.assertEquals("10.256.30.40".ipv4Address(), false);
// Test.assertEquals("10.20.030.40".ipv4Address(), false);
// Test.assertEquals("127.0.1".ipv4Address(), false);
// Test.assertEquals("127.0.0.0.1".ipv4Address(), false);
// Test.assertEquals("..255.255".ipv4Address(), false);
// Test.assertEquals("127.0.0.1\n".ipv4Address(), false);
// Test.assertEquals("\n127.0.0.1".ipv4Address(), false);
// Test.assertEquals(" 127.0.0.1".ipv4Address(), false);
// Test.assertEquals("127.0.0.1 ".ipv4Address(), false);
// Test.assertEquals(" 127.0.0.1 ".ipv4Address(), false);
// })

String.prototype.ipv4Address=function(){
  var newArr = this.split('.');
  if(newArr.length !== 4){
    return false;
  }
  var test1 = this.split('.').join('');
  var regexp = new RegExp("\\D+", "g");
  if(regexp.test(test1) === true){
    return false;
  }
  for(var i = 0; i < newArr.length; i++){
    if(newArr[i].length === 0){
      return false;
    }
    if(newArr[i].charAt(0) === "0" && newArr[i].length > 1){
  return false
}
  if(newArr[i] > 255 || newArr[i]<0){
    return false;
  }
  }
 return true;
 }
