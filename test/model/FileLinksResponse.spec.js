/*
 * DCS (Gitea) API.
 * This documentation describes the DCS (Gitea) API.
 *
 * OpenAPI spec version: 1.15.6a+dcs
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.30
 *
 * Do not edit the class manually.
 *
 */
(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.dcs);
  }
}(this, function(expect, dcs) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('FileLinksResponse', function() {
      beforeEach(function() {
        instance = new dcs.FileLinksResponse();
      });

      it('should create an instance of FileLinksResponse', function() {
        // TODO: update the code to test FileLinksResponse
        expect(instance).to.be.a(dcs.FileLinksResponse);
      });

      it('should have the property git (base name: "git")', function() {
        // TODO: update the code to test the property git
        expect(instance).to.have.property('git');
        // expect(instance.git).to.be(expectedValueLiteral);
      });

      it('should have the property html (base name: "html")', function() {
        // TODO: update the code to test the property html
        expect(instance).to.have.property('html');
        // expect(instance.html).to.be(expectedValueLiteral);
      });

      it('should have the property self (base name: "self")', function() {
        // TODO: update the code to test the property self
        expect(instance).to.have.property('self');
        // expect(instance.self).to.be(expectedValueLiteral);
      });

    });
  });

}));
