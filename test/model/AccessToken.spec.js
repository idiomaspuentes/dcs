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
    describe('AccessToken', function() {
      beforeEach(function() {
        instance = new dcs.AccessToken();
      });

      it('should create an instance of AccessToken', function() {
        // TODO: update the code to test AccessToken
        expect(instance).to.be.a(dcs.AccessToken);
      });

      it('should have the property id (base name: "id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property name (base name: "name")', function() {
        // TODO: update the code to test the property name
        expect(instance).to.have.property('name');
        // expect(instance.name).to.be(expectedValueLiteral);
      });

      it('should have the property sha1 (base name: "sha1")', function() {
        // TODO: update the code to test the property sha1
        expect(instance).to.have.property('sha1');
        // expect(instance.sha1).to.be(expectedValueLiteral);
      });

      it('should have the property tokenLastEight (base name: "token_last_eight")', function() {
        // TODO: update the code to test the property tokenLastEight
        expect(instance).to.have.property('tokenLastEight');
        // expect(instance.tokenLastEight).to.be(expectedValueLiteral);
      });

    });
  });

}));