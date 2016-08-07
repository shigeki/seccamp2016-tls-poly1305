const assert = require('assert');
const Poly1305 = require('../index.js');

describe('Poly1305', function() {
  it('Poly1305Mac', function() {
    var key = new Buffer('85d6be7857556d337f4452fe42d506a80103808afb0db2fd4abff6af4149f51b', 'hex');
    var msg = new Buffer('Cryptographic Forum Research Group');
    var tag = new Buffer('a8061dc1305136c6c22b8baf0c0127a9', 'hex');
    var mac = Poly1305.Poly1305Mac(msg, key);
    assert(tag.equals(mac));
  });
  it('Poly1305KeyGeneration', function() {
    var key = new Buffer('808182838485868788898a8b8c8d8e8f909192939495969798999a9b9c9d9e9f', 'hex');
    var nonce = new Buffer('000000000001020304050607', 'hex');

    var polykey= new Buffer('8ad5a08b905f81cc815040274ab29471a833b637e3fd0da508dbb8e2fdd1a646', 'hex');
    var generated_key = Poly1305.Poly1305KeyGeneration(key, nonce);

    assert(polykey.equals(generated_key));
  });
});